/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   
    let letters = {}
    for (let i = 0; i < s.length; i++) {
        !letters[s[i]] ? letters[s[i]] = 1 : letters[s[i]]++
    }

    for (let key of Object.keys(letters)){
        if (letters[key]===1) {
            return s.indexOf(key)
        }
    }
    return -1
};