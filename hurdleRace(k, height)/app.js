function hurdleRace(k, height) {
    
    let maxHeight = Math.max(...height);

    return Math.max(0, maxHeight - k);
    
}