// BFS
function solution(n, edge) {
    const connects = new Array(n + 1).fill().map(_ => []);
    
    for (const e of edge) {
        connects[e[0]].push(e[1])
        connects[e[1]].push(e[0])
    }
    
    const visited = new Array(n + 1).fill(false);
    const distance = new Array(n + 1).fill(0);
    const queue = [1];
    visited[1] = true;
    
    while (queue.length) {
        const cur = queue.shift();
        
        for (const next of connects[cur]) {
            if (!visited[next]) {
                visited[next] = true;
                distance[next] = distance[cur] + 1;
                queue.push(next);
            }
        }
    }
    
    const max = Math.max(...distance);
    
    return distance.filter(el => el === max).length;
}