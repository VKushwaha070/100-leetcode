/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const res = nums1.concat(nums2).sort((a,b) => a - b);
    const len = res.length;
    const avgI = len / 2;
    
        
    return len % 2 === 0 ? (res[avgI] + res[avgI - 1]) / 2 : res[Math.floor(avgI)];
};