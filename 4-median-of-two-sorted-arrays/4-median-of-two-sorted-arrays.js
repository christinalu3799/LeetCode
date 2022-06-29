/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // nums1 = size m
    // nums2 = size n
    
    // Join and sort the 2 arrays 
    const merged = nums1.concat(nums2).sort((a,b) => {
        if(a<b) {
            return -1;
        }if (a>b) {
            return 1;
        } return 0
    });
        
    console.log(merged)
    // Check if length of merged is odd
    if((merged.length % 2) != 0) {
        // Grab middle number 
        let number = merged[Math.floor(merged.length/2)];
        console.log('odd', number)
        return number;
    } else {
        // Grab middle 2 nums 
        let n1 = parseFloat(merged[Math.floor(merged.length/2)-1]);
        let n2 = parseFloat(merged[Math.floor(merged.length/2)]);
        
        let number = (n1+n2) / 2;
        console.log(n1, n2, number, 'even')
        return number; 
    }    
};