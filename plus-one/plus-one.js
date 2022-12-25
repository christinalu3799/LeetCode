/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    // Make result array
    let result = [...digits]
    // Get the last digit
    let lastDigit = digits[digits.length-1]

    // just add 1 to last digit if less than 9
    if (lastDigit < 9) {
        result[digits.length-1] = lastDigit + 1
    } else {
        // if last digit = 9, need to change to 0 
        // make for loop to check digits from right to left
        for (let i = digits.length-1; i >= 0; i--) {
            if (digits[i] === 9) {
                result[i] = 0
            } else {
                result[i] = result[i] + 1
                // break out of loop if current digit != 0
                if (result[i] != 0) {
                    break
                }
            }
            // if we are at 0 index and value = 0
            if (i === 0 && result[i] === 0) {
                // this condition handles cases where the array needs to increase in size 
                // for example, [9, 9] would turn into [1, 0, 0]
                // Just add 1 to the beginning of the array
                result.unshift(1)
            }
        }
    }
    return result
}