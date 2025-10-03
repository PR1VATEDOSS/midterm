function angryProfessor(k, a) {
    
    let onTimeCount = a.filter(time => time <= 0).length;

    return onTimeCount < k ? "YES" : "NO";

}