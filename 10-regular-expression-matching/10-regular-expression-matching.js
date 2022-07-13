/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// Great explanation: https://www.youtube.com/watch?v=HAA8mgxlov8&ab_channel=NeetCode
// TOP DOWN MEMOIZATION SOLUTION

var isMatch = function(s, p) {
    // BRUTE FORCE METHOD - not time efficient 
    const check = (i,j) => {
        // Take care of the edge cases first
        if(i >= s.length && j >= p.length) {
            return true;
        }
        
        if(j >= p.length) {
            return false;
        }
        
        let match = i < s.length && (s[i] === p[j] || p[j] === '.');
        
        // Check if in bounds and whether we have encountered a star
        if((j+1) < p.length && p[j+1] === '*') {
            // recursive call here
            return check(i, j+2) ||        // don't use *
            (match && check(i+1, j));      // use *
        }
        
        if(match) {
            return check(i+1, j+1);
        }
        
        return false;
    }
    return check(0,0);
};