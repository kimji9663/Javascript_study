// 순회하는 리스트
/**
[10, 20, 25, 27, 34, 35, 39]

다음의 값이 주어졌을 때 n번 순회를 결정합니다.
변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하세요.

ex)
n = 2
순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
리스트의_차 = [25, 19, 15, 7, 9, 8, 5]

2번 순회하고 리스트의 차 최소 값이 5 이므로 5의 index와 순회전 리스트 39, 순회후 리스트 34를 출력.
 */

const list = [10, 20, 25, 27, 34, 35, 39];
const n = 2;

function rotate(list, n){ // [10, 20, 25, 27, 34, 35, 39], 2
  //console.log(list); // [ 10, 20, 25, 27, 34, 35, 39 ]
  let result = '';
  let newList = list.map(x => x);
  for(let i = 0; i < n; i++){
  	let end = newList[newList.length - 1]; // 39
    newList.pop(end);
    newList.unshift(end);
  }
  let subtract = [];
  for(let j = 0; j < list.length; j++){
    subtract.push(Math.abs(list[j] - newList[j]));
  }
  //console.log(newList); // [ 35, 39, 10, 20, 25, 27, 34 ]
  //console.log(subtract); // [ 25, 19, 15, 7, 9, 8, 5 ]
  let min = subtract.reduce((a, b) => Math.min(a, b));
  let minIndex = subtract.indexOf(min);  // 6
  result = `index: ${minIndex}, value: ${list[minIndex]}, ${newList[minIndex]}`;
  
  return result;
}

console.log(rotate(list, n));