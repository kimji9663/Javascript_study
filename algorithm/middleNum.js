/*
1. 가운데 글자 가져오기
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
재한사항 s는 길이가 1 이상, 100이하인 스트링입니다.
*/

//예시답안1
function solution(s) {
    var answer = '';
    
    if (s.length % 2 === 1) {
        let num = Math.floor(s.length / 2);
        return s[num];
    }
    
    if (s.length % 2 === 0) {
        let num = s.length / 2;
        return s[num-1] + s[num];
    }
    
    return answer;
}

console.log(solution('abcde'));
console.log(solution('qwer'));


//예시답안2
function solution(s) { //s를 인수로 받음
    var answer = ''; 
    if(s.length % 2 ===0){ //s.length는 글자 수, 글자 수를 2로 나눈 나머지가 0일 때(즉 짝수일 때)
        //concat은 원본을 복사한 후 그 복사본에 새 데이터를 추가
        answer = answer.concat(s[s.length/2 -1]); //s의 배열갯수를 2로 나눈 값의 인덱스의 앞 글자를 반환(인덱스는 0부터 시작)
        console.log('answer 짝수1 : ' + answer);
        answer = answer.concat(s[s.length/2]); //할당된 값에 s의 배열갯수를 2로 나눈 값의 인덱스를 추가
        console.log('answer 짝수2 : ' + answer);
    }else{ //홀수일 때
        answer = answer.concat(s[Math.floor(s.length/2)]); //s의 배열갯수를 2로 나눠 내림한 값의 인덱스를 반환 
        console.log('answer 홀수 : ' + answer);
    }
    return answer;
}

console.log(solution('abcde'));
console.log(solution('qwer'));


//스스로 풀어보기
function solution(s) {
    var answer = '';
    
    if (s.length % 2 === 0) {
      let num;
      num = s.length/2;
      //console.log(num);
      answer = s[num-1] + s[num];
      //console.log(answer);
    } else if (s.length % 2 === 1) {
      let num;
      num = Math.floor(s.length/2);
      answer = s[num];
      //console.log(answer);
    }
  
    return answer;
}

console.log(solution('abcde'));
console.log(solution('qwer'));

