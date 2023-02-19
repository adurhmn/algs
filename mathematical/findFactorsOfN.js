// We don't have to loop till end of the given number to find out all the factors. 
// We just have to loop till reaching the given number's squareroot. (this reduces complexity from O(N) to O(logN))
// After that point we, can figure out the rest of the factors by dividing the given number with the already found factors.

// There is one special case with this logic. 
// When the given number has a perfect square, then the middle factor is duplicated. 
// The special case is also handled properly in the below code.

function findFactors (num) {

    const startingFactors = []
    const latterFactors = []
    const sqrt = Math.sqrt(num)
    
    for (let i = 1; i <= sqrt; i++) { // i*i <= num (better way)
        if (num % i == 0) {
            startingFactors.push(i)
            latterFactors.push(num / i)
        }
    }

    // edge case (if number has perfect square, then the middle factor is replicated, so remove it)
    if (sqrt % 1 == 0) startingFactors.pop()

    return startingFactors.concat(latterFactors.reverse())
}
