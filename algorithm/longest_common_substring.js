// 가장 긴 공통 문자열
/**
 * 두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램을 만들어 주세요.

 1. 문자열 쪼개기
 'abcd', 'abc', 'bcd', 'ab', 'bc', 'cd' ...
 slice(0, 4), / slice(0, 3), slice(1, 4), / slice(0, 2), slice(1, 3), slice(2, 4) ... slice:문자열의 추출된 부분을 담는 새로운 문자열 반환

 2. 어떻게 순회할 것인가
 첫번째 값은 0, 0 1, 0 1 2 ... 항상 0부터 시작, 1씩 증가
 두번째 값은 4, 3 4, 2 3 4 ... 항상 4로 끝남, 1씩 증가
 자릿수가 1 줄어들수록 경우의 수가 1 증가
 가장 빈번하게 바뀌는 값 -> 안쪽 for문, 그 다음으로 바뀌는 값 -> 바깥쪽 for문 
 */

 function sol (string){
    let result = [];
    for(let i = 1; i < string.length+1; i++){
      for(let j = 0; j < i; j++){
        result.push(string.slice(j, string.length-i+j+1));
      }
    }
    //console.log(result); // [ 'abcd', 'abc', 'bcd', 'ab', 'bc', 'cd', 'a', 'b', 'c', 'd' ]
    return result;
  }
  const string1 = 'abcd';
  const string2 = 'bcde';
  const arr1 = sol(string1);
  const arr2 = sol(string2);
  
  console.log(arr1);
  console.log(arr2);
  
  let intersection = arr1.filter( x => arr2.includes(x)); // filter는 원본을 변경하지 않음
  console.log(arr1); // 원본은 그대로임
  console.log(intersection); // 그래서 새 변수에 복사
  intersection.sort((a, b) => b.length - a.length); // sort는 원본을 변경함
  console.log(intersection[0]); // 'bcd' 원본이 변경됨
  