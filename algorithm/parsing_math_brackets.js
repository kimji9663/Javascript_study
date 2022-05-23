// 수학 괄호 파싱
/**
 * 수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 
 * 괄호는 소괄호밖에 없습니다.
 */

let user_input = '((()))';

function solution(s){
    let step = 0;
    for(let i in s){
        if(s[i] === '('){
            step += 1;
        } else if(s[i] === ')'){
            step -= 1;
        }
    }
    if(step === 0){
        return true;
    }else{
        return false;
    }
}

console.log(solution(user_input)); // true