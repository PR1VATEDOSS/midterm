function circularArrayRotation(a, k, queries) {
    
    let n = a.length;
    k = k % n;

    let rotatedArray = a.slice(-k).concat(a.slice(0, n - k));
    let results = queries.map(index => rotatedArray[index]);

    return results;
    

}