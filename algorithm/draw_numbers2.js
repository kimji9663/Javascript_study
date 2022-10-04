// 숫자 뽑기
/**
 * 어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수를 찾아 주세요.
 * 
 * 예를 들어, 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23]을 만들 수 있습니다.
 * 이 중 가장 큰 수는 73입니다.
 */

// 강의 풀이
let n = '1723'.split('');
let k = 2;

function sol(n, k){
  let result = [];

  // 재귀함수를 이용해 모든 경우의 수를 받음(이중 for문으로 해도 무방할 듯)
  const f = (pre, n) => {
    for(let i = 0; i < n.length; i++){
      result.push(pre + n[i]);
      
      f(pre + n[i], n.slice(i + 1));
    }
  }
  
  f('', n);
  //console.log(result);
  result.sort((a, b) => b - a);
  result = result.filter( x => x.length === k); // 모든 경우의 수 중 두자릿 수만 걸러 냄
  console.log(result);
  return result[0];
}

sol(n, k);