function findDigits(n) {
    
    let count = 0;
    let strN = n.toString();
    for (let char of strN) {
        let digit = parseInt(char);
        if (digit !== 0 && n % digit === 0) {
            count++;
        }
    }
    return count;
    

}