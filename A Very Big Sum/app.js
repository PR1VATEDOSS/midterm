function aVeryBigSum(ar) {
  var sum = 0;
    for (var i = 0; i < ar.length; i++) {
        if(typeof ar[i] == `number`) sum += ar[i];
    }
    return sum;
}