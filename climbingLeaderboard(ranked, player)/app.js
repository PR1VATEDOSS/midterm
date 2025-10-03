function climbingLeaderboard(ranked, player) {
    
    let uniqueRanks = [...new Set(ranked)];
    let results = [];
    let n = uniqueRanks.length;

    for (let score of player) {
        while (n > 0 && score >= uniqueRanks[n - 1]) {
            n--;
        }
        results.push(n + 1);
    }
    return results;

}