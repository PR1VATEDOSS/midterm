function timeConversion(s) {

    let period = s.slice(-2);
    let time = s.slice(0, -2).split(':');
    let hours = parseInt(time[0]);
    let minutes = time[1];
    let seconds = time[2];
    if (period === 'AM') {
        if (hours === 12) {
            hours = 0;
        }
    } else {
        if (hours !== 12) {
            hours += 12;
        }
    }
    let hoursStr = hours < 10 ? '0' + hours : '' + hours;
    return hoursStr + ':' + minutes + ':' + seconds;
}