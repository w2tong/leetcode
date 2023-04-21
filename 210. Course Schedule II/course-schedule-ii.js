/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const adj = Array.from(Array(numCourses), () => new Array());
    for (let i = 0; i < prerequisites.length; i++) {
        adj[prerequisites[i][1]].push(prerequisites[i][0]);
    }

    const visited = new Array(numCourses).fill(false);
    const done = new Array(numCourses).fill(false);
    const arr = [];
    function dfs(node) {
        if (visited[node]) return false
        visited[node] = true;
        for (let i = 0; i < adj[node].length; i++) {
            if (!done[adj[node][i]] && !dfs(adj[node][i])) {
                return false;
            }
        }
        done[node] = true;
        arr.push(node);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!done[i] && !dfs(i)) return [];
    }
    return arr.reverse();
};