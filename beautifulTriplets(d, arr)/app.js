function beautifulTriplets(d, arr) {
    
    let count = 0;
    let numSet = new Set(arr);

    for (let num of arr) {
        if (numSet.has(num + d) && numSet.has(num + 2 * d)) {
            count++;
        }
        if (numSet.has(num - d) && numSet.has(num - 2 * d)) {
            count++;
        }
        numSet.delete(num);
    }
    return count;
}