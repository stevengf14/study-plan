/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return root;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}
 
var maxScore = function (nums1, nums2, k) {
    const n = nums1.length;
    const pairs = [];

    // Pair elements from nums1 and nums2
    for (let i = 0; i < n; i++) {
        pairs.push([nums1[i], nums2[i]]);
    }

    // Sort pairs by nums2 in descending order
    pairs.sort((a, b) => b[1] - a[1]);

    const minHeap = new MinHeap();
    let sum = 0;
    let maxScore = 0;

    // Iterate through pairs
    for (let i = 0; i < n; i++) {
        sum += pairs[i][0];
        minHeap.push(pairs[i][0]);

        if (minHeap.size() > k) {
            sum -= minHeap.pop();
        }

        if (minHeap.size() === k) {
            maxScore = Math.max(maxScore, sum * pairs[i][1]);
        }
    }

    return maxScore;
};
