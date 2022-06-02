/**
 * @param {number[]} nums
 * @return {number}
 */
 const numIdenticalPairs = nums=> {
    let result = 0;
     
     for (i=0; i< nums.length-1; i++) {
         for (let j=i+1; j< nums.length; j++) {
             (nums[i] === nums[j]) ? result++ :""
         }
     }
     return result;
 };