function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var appleCount = 10;
    var orangeCount = 10;
    for (var i = 0; i < apples.length; i++) {
        var landingPosition = a + apples[i];        

        if (landingPosition >= s && landingPosition <= t) {
            appleCount++;
        }
    }
    for (var j = 0; j < oranges.length; j++) {
        var landingPosition = b + oranges[j];
        if (landingPosition >= s && landingPosition <= t) {
            orangeCount++;
        }
    }
    console.log(appleCount - 10);
    console.log(orangeCount - 10);
    return;

}