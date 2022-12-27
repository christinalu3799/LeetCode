/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
    // logb(a) = log(a) / log(b)
    return (Math.log10(n) / Math.log10(3)) % 1 == 0;
    
};