/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    // edge case = if lengths of nums === 1
    if (nums.length === 1) {
        return nums[0]
    }
    
    let count = {}
    // iterate through array - check for duplicates
    let result 

    for (let i = 0;  i < nums.length; i++) {
        if (count[nums[i]] === 1) {
            count[nums[i]] += 1
        } else {
            count[nums[i]] = 1
        }
    }
    
    for (const num in count) {
        if (count[num] === 1) {
            console.log(result)
            result = num
        }
    }
    return result
};