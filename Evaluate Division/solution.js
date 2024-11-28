/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
    const graph = buildGraph(equations, values);
    const results = [];

    for (const [numerator, denominator] of queries) {
        if (!graph.has(numerator) || !graph.has(denominator)) {
            results.push(-1.0);
        } else if (numerator === denominator) {
            results.push(1.0);
        } else {
            const visited = new Set();
            results.push(dfs(graph, numerator, denominator, 1.0, visited));
        }
    }

    return results;
};

function buildGraph(equations, values) {
    const graph = new Map();

    equations.forEach(([a, b], i) => {
        const value = values[i];

        if (!graph.has(a)) graph.set(a, new Map());
        if (!graph.has(b)) graph.set(b, new Map());

        graph.get(a).set(b, value);
        graph.get(b).set(a, 1.0 / value);
    });

    return graph;
}

function dfs(graph, start, end, product, visited) {
    if (graph.get(start).has(end)) {
        return product * graph.get(start).get(end);
    }

    visited.add(start);

    for (const [neighbor, value] of graph.get(start).entries()) {
        if (!visited.has(neighbor)) {
            const result = dfs(graph, neighbor, end, product * value, visited);
            if (result !== -1.0) {
                return result;
            }
        }
    }

    return -1.0;
}
