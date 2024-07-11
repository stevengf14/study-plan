/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
    const size = grid.length;

    const rows = grid.map(row => JSON.stringify(row));

    const rowCount = rows.reduce((acc, row) => {
        acc[row] = (acc[row] || 0) + 1;
        return acc;
    }, {});

    let count = 0;

    for (let i = 0; i < size; i++) {
        let column = [];
        for (let j = 0; j < size; j++) {
            column.push(grid[j][i]);
        }
        const colStr = JSON.stringify(column);
        count += rowCount[colStr] || 0;
    }
    return count;
};
