class Solution {
    public double[] calcEquation(List<List<String>> equations, double[] values, List<List<String>> queries) {
        Map<String, Map<String, Double>> graph = buildGraph(equations, values);
        double[] results = new double[queries.size()];

        for (int i = 0; i < queries.size(); i++) {
            String numerator = queries.get(i).get(0);
            String denominator = queries.get(i).get(1);

            if (!graph.containsKey(numerator) || !graph.containsKey(denominator)) {
                results[i] = -1.0;
            } else if (numerator.equals(denominator)) {
                results[i] = 1.0;
            } else {
                Set<String> visited = new HashSet<>();
                results[i] = dfs(graph, numerator, denominator, 1.0, visited);
            }
        }
        return results;
    }

    private Map<String, Map<String, Double>> buildGraph(List<List<String>> equations, double[] values) {
        Map<String, Map<String, Double>> graph = new HashMap<>();
        for (int i = 0; i < equations.size(); i++) {
            String a = equations.get(i).get(0);
            String b = equations.get(i).get(1);
            double value = values[i];

            graph.putIfAbsent(a, new HashMap<>());
            graph.putIfAbsent(b, new HashMap<>());

            graph.get(a).put(b, value);
            graph.get(b).put(a, 1.0 / value);
        }
        return graph;
    }

    private double dfs(
            Map<String, Map<String, Double>> graph, String start, String end, double product, Set<String> visited) {

        if (graph.get(start).containsKey(end)) {
            return product * graph.get(start).get(end);
        }

        visited.add(start);

        for (Map.Entry<String, Double> neighbor : graph.get(start).entrySet()) {
            if (!visited.contains(neighbor.getKey())) {
                double result = dfs(graph, neighbor.getKey(), end, product * neighbor.getValue(), visited);
                if (result != -1.0) {
                    return result;
                }
            }
        }

        return -1.0;
    }
}
