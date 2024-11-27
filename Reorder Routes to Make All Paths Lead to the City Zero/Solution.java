class Solution {
    public int minReorder(int n, int[][] connections) {
        List<int[]>[] graph = new ArrayList[n];
        for (int i = 0; i < n; i++) {
            graph[i] = new ArrayList<>();
        }
        for (int[] connection : connections) {
            graph[connection[0]].add(new int[] { connection[1], 1 });
            graph[connection[1]].add(new int[] { connection[0], 0 });
        }

        boolean[] visited = new boolean[n];
        Queue<Integer> queue = new LinkedList<>();
        queue.add(0);
        visited[0] = true;
        int changes = 0;

        while (!queue.isEmpty()) {
            int current = queue.poll();
            for (int[] neighbor : graph[current]) {
                int nextCity = neighbor[0];
                int direction = neighbor[1];
                if (!visited[nextCity]) {
                    visited[nextCity] = true;
                    changes += direction;
                    queue.add(nextCity);
                }
            }
        }
        return changes;
    }
}
