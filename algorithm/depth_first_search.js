// DFS (Depth First Search)
const graph = {'E': ['D', 'A'],
               'F': ['D'],
               'A': ['E', 'C', 'B'],
               'B': ['A'],
               'C': ['A'],
               'D': ['E','F']
              }

function dfs(data, start) {
    let visited = [];
    let stack = [start];

    while (stack.length !== 0){
        let n = stack.pop();
        //console.log(graph[n]);
        if (!visited.includes(n)){
            visited.push(n);
            let sub = graph[n].filter(x => !visited.includes(x));
            for (let i of sub){
                stack.push(i);
            }
        }
    }
    return visited;
}

console.log(dfs(graph, 'E')); // [ 'E', 'A', 'B', 'C', 'D', 'F' ]