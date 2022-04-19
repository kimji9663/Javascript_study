// 최단 경로 탐색

const graph = {
  'A': ['B', 'C'],
  'B': ['A', 'D', 'E'],
  'C': ['A', 'F'],
  'D': ['B'],
  'E': ['B', 'F'],
  'F': ['C', 'E']
}

// 두 값의 최단 경로 찾기
// 입력 : A F

function sps(start, end) {
    let visited = [start];
    let queue = [start];
  	let count = -1;
    while (queue.length !== 0){
      	count += 1;
      	let size = queue.length;
      	for(let i = 0; i < size; i++){
          let n = queue.splice(0, 1);
          if (n == end){
            return count;
          }
          for (let next_node in graph[n]){
            if(!visited.includes(graph[n][next_node])){
              visited.push(graph[n][next_node]);
              queue.push(graph[n][next_node]);
            }
          }
        }
    }
    return visited;
}

sps('A', 'F');