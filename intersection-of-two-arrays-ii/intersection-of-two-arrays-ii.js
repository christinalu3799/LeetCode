/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
    // will iterate through length of shorter array 
    let smallArr 
    let bigArr
    if (nums1.length < nums2.length) {
        smallArr = nums1
        bigArr = nums2
    } else if (nums1.length >= nums2.length) {
        smallArr = nums2
        bigArr = nums1
    } 
    let result = []
    for (let i = 0; i < smallArr.length; i++) {
        console.log('bigArr =',bigArr)
        if (bigArr.includes(smallArr[i])) {
            result.push(smallArr[i])
            let idx = bigArr.indexOf(smallArr[i])
            bigArr[idx] = null
            console.log('bigArr =',bigArr)
        }
    }
    
    return result
};