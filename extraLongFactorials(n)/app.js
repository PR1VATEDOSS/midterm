function extraLongFactorials(n) {
    let result = 1n; // BigInt for large numbers
    for (let i = 2n; i <= BigInt(n); i++) {
        result *= i;
    }
    console.log(result.toString());
}
