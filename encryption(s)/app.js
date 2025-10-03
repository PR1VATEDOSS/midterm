function encryption(s) {
   
    s = s.replace(/\s+/g, '');
    let length = s.length;
    let cols = Math.ceil(Math.sqrt(length));
    let rows = Math.ceil(length / cols);
    let encrypted = [];

    for (let c = 0; c < cols; c++) {
        let word = '';
        for (let r = 0; r < rows; r++) {
            let index = r * cols + c;
            if (index < length) {
                word += s[index];
            }
        }
        encrypted.push(word);
    }

    return encrypted.join(' ');

}