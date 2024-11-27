/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
    const graph = Array.from({ length: n }, () => []);
    for (const [a, b] of connections) {
        graph[a].push([b, 1]);
        graph[b].push([a, 0]);
    }

    // Realizar BFS
    const visited = new Array(n).fill(false);
    const queue = [0];
    visited[0] = true;
    let changes = 0;

    while (queue.length > 0) {
        const current = queue.shift();
        for (const [nextCity, direction] of graph[current]) {
            if (!visited[nextCity]) {
                visited[nextCity] = true;
                changes += direction;
                queue.push(nextCity);
            }
        }
    }

    return changes;
};
