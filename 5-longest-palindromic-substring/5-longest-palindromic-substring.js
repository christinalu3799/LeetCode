/**
 * @param {string} s
 * @return {string}
 */

const getDrome = (left, right, s) => {
    // Want to check if the left and right are out of balance
    while(left>=0 && right <s.length) {
        if(s[left] !== s[right]) break;
        left--;
        right++;
    }
    return [left+1, right];
}

var longestPalindrome = function(s) {
    // String will always have 1 calendar
    let max=[0,1];
    
    for(let i=0;i<s.length;i++){
        // getDrome(left, right, s)
        let even = getDrome(i-1,i,s);
        let odd = getDrome(i-1,i+1,s);
        let currentMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        
        max = max[1] - max[0] > currentMax[1] - currentMax[0] ? max : currentMax;
    }
    
    // If only 1 char, that 1 char will be our palindrome
    // Slice is exclusive of the end
    // Here, it will only return the max[0]
    return s.slice(max[0],max[1]);
};