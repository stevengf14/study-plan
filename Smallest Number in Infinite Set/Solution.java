class SmallestInfiniteSet {

    private int current;
    private PriorityQueue<Integer> minHeap;
    private HashSet<Integer> setHeap;

    public SmallestInfiniteSet() {
        current = 1;
        minHeap = new PriorityQueue<>();
        setHeap = new HashSet<>();
    }

    public int popSmallest() {
        if (!minHeap.isEmpty()) {
            int smallest = minHeap.poll();
            setHeap.remove(smallest);
            return smallest;
        } else {
            return current++;
        }
    }

    public void addBack(int num) {
        if (num < current && !setHeap.contains(num)) {
            minHeap.add(num);
            setHeap.add(num);
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * SmallestInfiniteSet obj = new SmallestInfiniteSet();
 * int param_1 = obj.popSmallest();
 * obj.addBack(num);
 */
