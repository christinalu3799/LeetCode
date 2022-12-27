/**
 * @param {string} s
 * @return {number}
 
    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
    
    Input: s = "LVIII"
    Output: 58
    Explanation: L = 50, V= 5, III = 3.
 */
var romanToInt = function(s) {
    let converter = {
        'I':1, // 
        'V':5,
        'X':10, // 
        'L':50,
        'C':100, // 
        'D':500,
        'M':1000,
    }
    let number = 0
    for (let i = 0; i < s.length; i++) {
        const current = converter[s[i]];
        const next = converter[s[i+1]];

        if (current < next){
            number += next - current // IV -> 5 - 1 = 4
            i++
        } else {
            number += current
        }
    }
    return number
};