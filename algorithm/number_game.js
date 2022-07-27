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

const n = 6;

// 우선 직관적코드로 결과를 도출해보자.
function f(n) {
  // 1
  let k = '1';
  let result = '';

  // 1이 1개
  result += k;
  let count1 = result.match(/1/g).filter(function(item){
    return item != '';
  }).length;
  let result1 = result += count1;
  console.log(result1);
  
  // 1이 2개
  let count2 = result1.match(/1/g).filter(function(item){
    return item != '';
  }).length;
  let result2 = '';
  result2 += k + count2;
  console.log(result2);
  
  // 1이 1개, 2가 1개
  let count3_1 = result2.match(/1/g).filter(function(item){
    return item != '';
  }).length;
  let count3_2 = result2.match(/2/g).filter(function(item){
    return item != '';
  }).length;
  let result3 = '';
  result3 += k + count3_1;
  k++;
  result3 += String(k) + count3_2;
  console.log(result3);
  return result3;
  	
  return result4;
}
console.log('result : ' + f(n));