// 팩토리얼_반복문 이용
function fac(num){
  var i;
  var result = 1;
  for(i = 1; i <= num; ++i){
    result *= i;
  }
  return result;
}

console.log('1! : ' + fac(1));
console.log('5! : ' + fac(5));
console.log('10! : ' + fac(10));