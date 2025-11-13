class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let maxLength = 0;
        for(let i = 0; i < nums.length; i++){
          let currentNum = nums[i];
          let currentLength = 1;
          while(nums.includes(currentNum + 1)){
            currentNum += 1;
            currentLength += 1;
          } 
          maxLength = Math.max(maxLength , currentLength);
        }
        return maxLength
    }
}
