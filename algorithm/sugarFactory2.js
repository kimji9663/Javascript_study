const solution = n => { // 설탕 총량 = n
  max = parseInt(n / 5); //총량n을 5로 나누면 5kg봉지의 최대 수
  /*
  parseInt :
  - 문자열을 파싱해서 숫자를 찾아 반환
  - 소수점 이하를 출력하지 않는다.
  */
  i = max; // i는 5kg봉지의 수 
  while (i >= 0) { // i가 0이 될 때까지 반복
    remain = n - i * 5; // 총량에서 5kg봉지의 무게를 뺀 나머지를 remain으로 정의  
    if (remain % 3 === 0) { // remain을 3으로 나눈 값의 나머지가 0일 때, 3으로 나눈 값 = 3kg봉지의 수
      return i + remain / 3; // 5kg봉지 수 + 3kg봉지 수
    }

    // remain을 3으로 나눈 값의 나머지가 0이 아닐 때, 5kg봉지 수 하나씩 감소
    i -= 1;
  }

  //위 조건을 모두 충족하지 못했을 경우, -1 리턴
  return -1;
};

console.log(solution(18));
console.log(solution(4));
console.log(solution(6));
console.log(solution(9));
console.log(solution(11));