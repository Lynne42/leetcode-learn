/*
 * @lc app=leetcode.cn id=1991 lang=javascript
 *
 * [1991] 找到数组的中间位置
 */



// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function(nums) {
    let sum = 0;
    const len = nums.length;
    for(let i = 0; i < len; i++) {
        sum += nums[i]
    }

    let leftSum = 0;
    for(let i = 0; i < len; i++) {
        if(leftSum === sum - leftSum - nums[i]) {
            return i
        }
        leftSum += nums[i]
    }
    return -1
};
// @lc code=end

