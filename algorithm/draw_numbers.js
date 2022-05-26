// 숫자 뽑기
/**
 * 어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수를 찾아 주세요.
 * 
 * 예를 들어, 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23]을 만들 수 있습니다.
 * 이 중 가장 큰 수는 73입니다.
 */

// 내 풀이
 let n = '1723'.split('');
 //console.log(n);
 let k = 2;
 
 function sol(n, k){
   let all = [];
   //console.log(n.length);
   for(let i = 0; i < n.length; i++){
     //console.log('n : ', n);
     for(let j = i + 1; j < n.length; j++){
       //console.log(n.length);
       let num = n[i] + n[j];
       all.push(num);
     }
   }
   //console.log('all : ', all);
   let result = all.sort((a, b) => a - b);
   return result.pop();
 }
 
 sol(n, k);

 // * 내 풀이 문제점 : 숫자 k를 활용하지 않아 항상 두자릿 수 결과만 받을 수 있음.