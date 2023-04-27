// Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

// How many such routes are there through a 20×20 grid?

// https://projecteuler.net/problem=15


const findMaxWeight = (n) => {
    const a = [];
    for(let i = 0; i < n; i++) {
        a[i] = [];
    }
    for(let i = n - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            if(i == n - 1 || j == n -1) {
                a[i][j] = 1;    
            } else {
                a[i][j] = (a[i+1][j] || 0) + (a[i][j+1] || 0);
            }
        }
    }
    return a;
}

const weights = findMaxWeight(21)
console.log(weights[0][0])