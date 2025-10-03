function acmTeam(topic) {
   
    let n = topic.length;
    let maxTopics = 0;
    let teamCount = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let combinedTopics = 0;
            for (let k = 0; k < topic[i].length; k++) {
                if (topic[i][k] === '1' || topic[j][k] === '1') {
                    combinedTopics++;
                }
            }
            if (combinedTopics > maxTopics) {
                maxTopics = combinedTopics;
                teamCount = 1;
            }
            else if (combinedTopics === maxTopics) {
                teamCount++;
            }
        }
    }
    return [maxTopics, teamCount];

}