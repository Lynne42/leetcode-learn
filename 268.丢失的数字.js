/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const len = nums.length;
    const targetSum = len * (len + 1) / 2;
    let sum = 0;
    for(let i = 0; i < len; i++) {
        sum += nums[i];
    }
    return targetSum - sum;
    
};
// @lc code=end

