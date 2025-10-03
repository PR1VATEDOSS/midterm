function diagonalDifference(arr) {
 
    var leftToRight = 0;
    var rightToLeft = 0;

    for (var i = 0; i < arr.length; i++) {
        leftToRight += arr[i][i];
        rightToLeft += arr[i][arr.length - 1 - i];
    }
    return Math.abs(leftToRight - rightToLeft);
}