// 1. 오름차순으로 정렬하세요
const users = ["김지혜", "서지영", "김도움"];

// function compare(a, b) {
//   return (a > b ? -1 : (a < b ? 1 : 0));
// }
// users.sort(compare);

const result1 = users.sort(function(a, b) {
  return a > b ? -1 : a < b ? 1 : 0;
});

console.log(result1); //["서지영", "김지혜", "김도움"]




// 2. 제곱의 값 구하기
const numbers = [ 2, 4, 3, 7 ];

const result2 = numbers.map( number => number ** 2);

console.log(result2); //[4, 16, 9, 49]




// 3. 10보다 작은 값 구하기
const numbers2 = [ 12, 4, 23, 7 ];

const result3 = numbers2.filter( number => number < 10 );

console.log(result3);