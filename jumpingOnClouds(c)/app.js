function jumpingOnClouds(c) {
    
    let jumps = 0;
    let position = 0;
    let n = c.length;

    while (position < n - 1) {
        if (position + 2 < n && c[position + 2] === 0) {
            position += 2;
        } else {
            position += 1;
        }
        jumps++;
    }
    return jumps;

}