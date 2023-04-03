/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    var clearIsland = function (x, y) {
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[x].length || grid[x][y] === "0") return;
        grid[x][y] = "0";
        clearIsland(x - 1, y);
        clearIsland(x + 1, y);
        clearIsland(x, y - 1);
        clearIsland(x, y + 1);

    }
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                count++;
                clearIsland(i, j);
            }
        }
    }
    return count;
};