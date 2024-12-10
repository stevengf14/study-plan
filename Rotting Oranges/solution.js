/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let freshCount = 0;

    // Initialize the queue with all rotten oranges and count fresh oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }

    // If there are no fresh oranges, return 0
    if (freshCount === 0) return 0;

    let minutes = 0;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    // BFS to rot adjacent fresh oranges
    while (queue.length > 0) {
        let size = queue.length;
        let rotted = false;

        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift();
            for (const [dx, dy] of directions) {
                const newRow = row + dx;
                const newCol = col + dy;

                if (
                    newRow >= 0 &&
                    newRow < rows &&
                    newCol >= 0 &&
                    newCol < cols &&
                    grid[newRow][newCol] === 1
                ) {
                    grid[newRow][newCol] = 2;
                    queue.push([newRow, newCol]);
                    freshCount--;
                    rotted = true;
                }
            }
        }

        if (rotted) minutes++;
    }

    return freshCount === 0 ? minutes : -1;
};
