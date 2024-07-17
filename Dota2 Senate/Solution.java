class Solution {
    public String predictPartyVictory(String senate) {
        Queue<Integer> radiant = new LinkedList<>();
        Queue<Integer> dire = new LinkedList<>();

        int n = senate.length();

        // Inicializar las colas con los índices de los senadores
        for (int i = 0; i < n; i++) {
            if (senate.charAt(i) == 'R') {
                radiant.add(i);
            } else {
                dire.add(i);
            }
        }

        // Simular el proceso de votación
        while (!radiant.isEmpty() && !dire.isEmpty()) {
            int rIndex = radiant.poll();
            int dIndex = dire.poll();

            // El que tiene el índice menor actúa primero y prohíbe al otro
            if (rIndex < dIndex) {
                radiant.add(rIndex + n);
            } else {
                dire.add(dIndex + n);
            }
        }

        return radiant.isEmpty() ? "Dire" : "Radiant";
    }
}
