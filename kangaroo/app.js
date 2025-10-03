function kangaroo(x1, v1, x2, v2) {
    if (v1 <= v2) {
    }    else {
        for (var i = 0; i < 10000; i++) {
            x1 += v1;
            x2 += v2;
            if (x1 == x2) {
                return "YES";
            }
        }
    }
    return "NO";
}