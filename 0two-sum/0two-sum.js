/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let otherNums = {}
    
    for (let i = 0; i < nums.length; i++) {
        // diff = 9 - 2 = 7
        let diff = target - nums[i]
        
        // want to see if this value exists in otherNums 
        if (otherNums[diff] !== undefined) {
            // return the index where 2 nums add to target val
            return [otherNums[diff], i]
        } else {
            // store the diff in otherNums as {diff: i}
            otherNums[nums[i]] = i
        }
    }
};