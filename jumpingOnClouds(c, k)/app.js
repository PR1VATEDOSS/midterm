function jumpingOnClouds(c, k) {

    let n = c.length;
    let energy = 100;
    let position = 0;

    do {
        position = (position + k) % n;
        energy -= c[position] === 1 ? 3 : 1;
    }while (position !== 0);

    return energy;

}
