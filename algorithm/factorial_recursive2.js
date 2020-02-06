// 팩토리얼_재귀함수 이용2
function fac(num) {
  if(1<num) {
    return num * fac(num-1);
  }
  return 1;
}
//출력
console.log(fac(5));
console.log(fac(10));