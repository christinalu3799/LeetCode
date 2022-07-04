/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i= 0;
    let result = 0;
    let isNeg = false;
    
    // Looking for empty char
    while(s[i] === ' ') {
        i++;
    }
    
    if (s[i] === '+' || s[i] === '-') {
        isNeg = s[i] === '-';
        i++;
    }
    console.log('checked sign', s[i])
    
    for(i ; i < s.length; i++) {
        // 48 is the Ascii value of 0
        let currValue = s.charCodeAt(i) - 48;
        console.log('currentChar', s[i], 'current Ascii value: ', currValue)
        if(currValue < 0 || currValue > 9) {
            break;
        }
        
        result *= 10; 
        result += currValue;
    }
    
    if(isNeg) {
        result = -result;
    }
    
    return Math.max(-(2**31), Math.min((2**31)-1, result));
};