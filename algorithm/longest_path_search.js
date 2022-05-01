// 최장 경로 탐색

const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6]
};

// 두 값의 최장 경로 찾기
// 입력 : 1 7
  
const user_input = [1, 7];
const start = parseInt(user_input[0], 10);
const end = parseInt(user_input[1], 10);

let queue = [start];
let visited = [];

function sol(n, visited){ // n == queue
  let node = n[n.length - 1];
  let length = 0; // 최종 경로 값
  
  if (node == end){ // node가 7이면,
    return visited.length;
  }
  
  if (visited.includes(node)){ // visited에 node의 맨 마지막 값이 포함되어 있으면,
    return visited.length; // 이 return이 실행될 때까지 재귀가 반복된다.
  } else {
    visited.push(node);
  }
  
  let max = []; // 방문한 모든 경로 값
  
  for(let next_node in graph[node]){ // for in은 결과값의 순서를 반환.
    n.push(graph[node][next_node]); // 2, 3, 4를 n에 넣는다.(n == queue)
    max.push(length, sol(n, visited)); // length와 sol함수의 결과 값을 max에 넣는다. (sol함수 - return될 때까지 n, visited값만 변경된 채로 계속 재귀적으로 실행된다.)
    length = Math.max.apply(null, max); // 배열에서 가장 큰 수를 얻고자 할 때에는 Math.max.apply(null, array)를 쓴다.
    
    queue.pop(); // 마지막 요소를 제거하고 그 요소를 반환.
  }
  
  return length;
}

console.log(sol(queue, visited));