/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let curr = 0;
    let target = 0;
    while(curr < nums.length) {
        if(nums[curr]) {
            [nums[target], nums[curr]]  = [nums[curr], nums[target]];
            curr++;
            target++;
        } else {
            curr++;
        }
    }
    
};
// @lc code=end

