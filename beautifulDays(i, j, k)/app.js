function beautifulDays(i, j, k) {
    
    let beautifulCount = 0;
    for (let day = i; day <= j; day++) {
        let reversedDay = parseInt(day.toString().split('').reverse().join(''));
        if (Math.abs(day - reversedDay) % k === 0) {
            beautifulCount++;
        }
    }
    return beautifulCount;  
}