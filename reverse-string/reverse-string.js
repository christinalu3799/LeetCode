/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0, right = s.length - 1;
    
    // keep iterating so long as left pointer is less than right 
    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
}