/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    const visited = new Array(rooms.length).fill(false);

    function dfs(currentRoom) {
        visited[currentRoom] = true;

        for (const key of rooms[currentRoom]) {
            if (!visited[key]) {
                dfs(key);
            }
        }
    }
    dfs(0);

    return visited.every(roomVisited => roomVisited);
};
