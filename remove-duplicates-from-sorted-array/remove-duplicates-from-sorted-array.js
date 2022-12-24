/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // edge case -> length of nums === 1
    if (nums.length === 1) {
        return 1
    }
    // need a pointer
    let pointer = 1 
    for (let i = 0; i < nums.length - 1; i++) {
        // set duplicate numbers equal to null
        if (nums[i] !== nums[i+1]) {
            nums[pointer] = nums[i+1]
            pointer++
        } 
    }
    return pointer
};