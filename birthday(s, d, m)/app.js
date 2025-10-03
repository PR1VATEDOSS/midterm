function birthday(s, d, m) {
    var count = 0;
    for (var i = 0; i <= s.length - m; i++) {
        var sum = 0;
        for (var j = 0; j < m; j++) {
            sum += s[i + j];
        }
        if (sum === d) count++;
    }
    return count;

}