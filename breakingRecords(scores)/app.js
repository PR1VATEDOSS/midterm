function breakingRecords(scores) {

    var min = scores[0];
    var max = scores[0];
    var minCount = 0;
    var maxCount = 0;

    for (var i = 1; i < scores.length; i++) {
        if (scores[i] < min) {
            min = scores[i];
            minCount++;
        }
        if (scores[i] > max) {
            max = scores[i];
            maxCount++;
        }
    }
    return [maxCount, minCount];
}