const leastFactor = (n) => {
    for(let i = 2; i < Math.sqrt(n) + 1; i++) {
        if(n % i == 0) {
            return i;
        }
    }
    return -1;
}

const largestPrimeFactor = (n) => {
    while (true) {
        const least = leastFactor(n);
        if (least == n || least == -1) {
            return n;
        } 
        n = n / least;
    }
}


console.log(largestPrimeFactor(600851475143))