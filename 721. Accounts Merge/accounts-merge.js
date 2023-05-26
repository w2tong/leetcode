/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    const emailAccountMap = new Map();
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
            if (!emailAccountMap.has(accounts[i][j])) {
                emailAccountMap.set(accounts[i][j], [i]);
            }
            else {
                emailAccountMap.get(accounts[i][j]).push(i);
            }
        }
    }

    const visited = new Array(accounts.length).fill(false);
    function dfs(i, emails) {
        if (visited[i]) return;
        visited[i] = true;
        for (let j = 1; j < accounts[i].length; j++) {
            const email = accounts[i][j];
            emails.add(email);
            for (const account of emailAccountMap.get(email)) {
                dfs(account, emails)
            }
        }
    }

    const res = [];
    for (let i = 0; i < accounts.length; i++) {
        if (visited[i]) continue;
        const emails = new Set();
        dfs(i, emails);
        res.push([accounts[i][0], ...Array.from(emails).sort()]);
    }
    return res;

};