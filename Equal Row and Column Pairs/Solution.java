class Solution {
    public int equalPairs(int[][] grid) {
        int size = grid.length;
        List<String> rows = Arrays.stream(grid)
                .map(row -> Arrays.toString(row))
                .collect(Collectors.toList());

        Map<String, Long> rowCount = rows.stream()
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));

        int count = 0;

        for (int i = 0; i < size; i++) {
            StringBuilder column = new StringBuilder();
            for (int j = 0; j < size; j++) {
                column.append(grid[j][i]);
                if (j != size - 1)
                    column.append(", ");
            }
            String colStr = "[" + column.toString().trim() + "]";
            count += rowCount.getOrDefault(colStr, 0L);
        }
        return count;
    }
}
