/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    const m = maze.length, n = maze[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const queue = [[...entrance, 0]];
    maze[entrance[0]][entrance[1]] = '+';

    while (queue.length > 0) {
        const [x, y, steps] = queue.shift();

        for (const [dx, dy] of directions) {
            const newX = x + dx, newY = y + dy;

            if (newX >= 0 && newX < m && newY >= 0 && newY < n && maze[newX][newY] === '.') {
                if (newX === 0 || newX === m - 1 || newY === 0 || newY === n - 1) {
                    return steps + 1;
                }
                maze[newX][newY] = '+';
                queue.push([newX, newY, steps + 1]);
            }
        }
    }

    return -1;
};
