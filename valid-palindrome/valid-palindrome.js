/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    // 1. convert to lowercase and remove all non-alphanumeric characters 
    // non-alphanumeric characters in string
    const regex = /[^A-Za-z0-9s]/g;
    const newStr = s.toLowerCase().replace(regex, "");
    console.log(newStr)
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] !== newStr[newStr.length-1-i]) {
            return false
        }
    }
    return true
};