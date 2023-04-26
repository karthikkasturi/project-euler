// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.



const solve = (multiples, limit = 1000) => {
    let i = 0, sum = 0;
    while(i < limit) {
        for(let j  = 0; j < multiples.length; j++) {
            if (i % multiples[j] == 0) {
                sum += i;
                break;
            }
        }
        i++;
    }
    return sum;
}

console.log(solve([3,5], 1000))