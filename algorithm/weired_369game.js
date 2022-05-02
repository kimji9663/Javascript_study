// 이상한 369
function sol(n){
    let answer = 0;
    let count = 1;
    const obj = {3:1, 6:2, 9:3};

    while(n.length !== 0){
        // n은 ['9', '3']이다. 따라서 n.length는 2
        answer += obj[parseInt(n.pop(), 10)]*count; // 1 * 1 + 3 * 3 = 10
      	// obj에서 n.pop()한 숫자가 가리키는 값 : 3을 가리키므로 1
        console.log('count : ', count); //1, 3
        count *= 3;
    }

    console.log('answer : ' + answer);
    return answer;
}

const user_input = '93'.split('');
console.log(user_input);
console.log(sol(user_input));