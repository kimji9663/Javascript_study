// BFS (Breadth First Search)
const graph = {'E': ['D', 'A'],
               'F': ['D'],
               'A': ['E', 'C', 'B'],
               'B': ['A'],
               'C': ['A'],
               'D': ['E','F']
              }

function bfs(data, start) {
    let visited = [];
    let queue = [start];
    while (queue.length !== 0){
        let n = queue.shift(); // 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환
        if (!visited.includes(n)) {
            visited.push(n);
            let sub = graph[n].filter(x => !visited.includes(x));
            for (let i of sub){
                queue.push(i);
            }
        }
    }
    return visited;
}

bfs(graph, 'E');