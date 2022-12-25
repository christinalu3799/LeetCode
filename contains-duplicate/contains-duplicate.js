/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    let count = {}
    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]] === 1) {
            console.log(count)
            return true
        }
        count[nums[i]] = 1
    }
    return false
};