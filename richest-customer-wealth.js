/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let maxWealth = 0;
    for (let acc of accounts) {
        let current = acc.reduce((sum, c) => (sum += c), 0);
        maxWealth = Math.max(current, maxWealth);
    }
    return maxWealth;

};