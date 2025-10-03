function birthdayCakeCandles(candles) {
    var max = Math.max(...candles);
    var count = 0;
    for (var i = 0; i < candles.length; i++) {
        if (candles[i] === max) count++;
    }
    return count;

}