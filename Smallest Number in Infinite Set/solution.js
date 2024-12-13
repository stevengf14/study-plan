
var SmallestInfiniteSet = function () {
    this.current = 1;
    this.minHeap = [];
    this.setHeap = new Set();
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
    if (this.minHeap.length > 0) {
        const smallest = this.minHeap.shift(); // Remove smallest from the heap
        this.setHeap.delete(smallest);
        return smallest;
    } else {
        return this.current++;
    }
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
    if (num < this.current && !this.setHeap.has(num)) {
        this.minHeap.push(num);
        this.minHeap.sort((a, b) => a - b); // Maintain heap order
        this.setHeap.add(num);
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
