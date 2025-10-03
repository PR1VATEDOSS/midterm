function getTotalX(a, b) {
    
    let count = 1;
    let total = 0;
    let maxA = Math.max(...a);
    let minB = Math.min(...b);

    while (maxA * count <= minB) {
        let multipleOfAllA = true;
        let factorOfAllB = true;
        let currentNumber = maxA * count;

        for (let i = 0; i < a.length; i++) {
            if (currentNumber % a[i] !== 0) {
                multipleOfAllA = false;
                break;
            }
        }
        for (let j = 0; j < b.length; j++) {
            if (b[j] % currentNumber !== 0) {
                factorOfAllB = false;
                break;
            }
        }
        if (multipleOfAllA && factorOfAllB) {
            total++;
        }
        count++;
    }


    return total;



}