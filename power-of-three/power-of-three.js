/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
    // EDGE CASE: if n = 0 
    if (n <= 0) return false
    
    // logb(a) = log(a) / log(b)
    return (Math.log10(n) / Math.log10(3)) % 1 == 0;
    
};