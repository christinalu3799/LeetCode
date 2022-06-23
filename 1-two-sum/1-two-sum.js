/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let hm = {}
    for(let i = 0; i < nums.length; i++) {
        let value = nums[i]
        let value2 = target - nums[i]
        if(hm[value2]!==undefined) {
            return [hm[value2], i]
        } else {
            hm[value] = i
        }
    }
};

