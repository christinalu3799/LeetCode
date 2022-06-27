/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    let windowStart = 0
    // Hash through this object
    // Instantiate an empty object to do this
    let soFar = {}
    
    // Iterate through the length of the string (s)
    for(let windowEnd  = 0; windowEnd < s.length; windowEnd++) {
        // We want to grab the end letter
        let rightChar = s[windowEnd] ;
        
        // If there is something already in soFar? If yes, add 1. If no, set it equal to 1
        soFar[rightChar] = soFar[rightChar] + 1 || 1;
        
        // Check if soFar is greater than 1 
        while(soFar[rightChar] > 1) {
            // Decrement from the left 
            let leftChar = s[windowStart];
            
            // What is the value of this leftChar? 
            if(soFar[leftChar] > 1) {
                soFar[leftChar]--;
            } else {
                delete soFar[leftChar];
            }
            
            windowStart++;
        }
        // Want to set variable to capture the max length of substring
        max = Math.max(max, (windowEnd - windowStart) + 1);
    }
    
    return max
};