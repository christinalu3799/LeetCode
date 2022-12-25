/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    // edge case = length of array === 1
    if (nums.length === 1) {
        return nums
    }
    // months.splice(1, 0, 'Feb');
    // splice(start, deleteCount, item1)
    // inserts at index 1
    let current = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[current] === 0) {
            nums.splice(current, 1)
            nums.splice(nums.length, 0, 0)
          
            console.log(nums)
        } else {
            current++
        }
    }
};