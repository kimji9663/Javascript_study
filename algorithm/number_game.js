// 숫자놀이
/**
 * 규칙
1. 1  → (1)
2. 11 → (1이 1개)
3. 12 → (1이 2개)
4. 1121 → (1이 1개 2가 1개)
5. 1321 → (1이 3개 2가 1개)
6. 122131 → (1이 2개 2가 1개 3이 1개)
7. 132231 → (1이 3개 2가 2개 3이 1개)

위와 같이 진행되는 규칙을 통해 진행 횟수 N을 입력받으면 해당되는 수를 출력하세요.

입력
6

출력
122131
 */


function solution(n) {
  // 1
  let answer = '1';
  let result = '';

  if(n === 1) {
    return 1;
  }
  for (let i = 1; i < n; i++){
    answer = rule(answer);
  }
  return answer;
}

function rule(answer) {
  //let answerMax = Math.max(...answer); // 만약 19라면 [12345678910111213141516171819] 그래서 가장 큰 수는 어차피 9 밖에 안나옴
  let answerMax = 9; // 계산할 필요가 엄슴
  let result = '';

  for (let i = 1; i < answerMax; i++){
    let re = new RegExp(i, 'g'); // 정규 표현식 정의
    let count = (answer.match(re) || []).length; //str.match(regexp)는 배열을 반환한다. 값이 없을 경우 빈 배열을 count에 담는다.

    // count는 배열이다.
    if(count >= 1) {
      result = result + String(i) + String(count); // 이전 값(없으면 빈 값) + 주체 + 주체의 개수
    }
  }
  return result;
}

const user_input = 6;
console.log(solution(user_input));