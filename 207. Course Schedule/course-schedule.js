/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const adj = Array.from(new Array(numCourses), () => new Array());
    for (let i = 0; i < prerequisites.length; i++) {
        adj[prerequisites[i][1]].push(prerequisites[i][0]);
    }

    const visited = new Array(numCourses).fill(false);
    const done = new Array(numCourses).fill(false);
    function dfs(node) {
        if (done[node]) return true;
        if (visited[node]) return false;
        visited[node] = true;
        for (let i = 0; i < adj[node].length; i++) {
            if (!dfs(adj[node][i])) return false;
        }
        done[node] = true;
        return true
    }

    for (let i = 0; i < adj.length; i++) {
        if (!dfs(i)) return false;
    }
    return true;
};