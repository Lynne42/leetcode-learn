/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */


var removeDuplicates = function(nums) {
    if (!nums.length) {
        return nums
    }
    let real = 2;
    for (let i = 2; i < nums.length; i++) {
        if(nums[i] !== nums[real-2]) {
            nums[real] = nums[i];
            real++
        }
    }
    return real
};

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesBySelf = function(nums) {
    if (!nums.length) {
        return nums
    }
    let real = 0;
    let val = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[real]) {
            real++
            nums[real] = nums[i]
            val = 0
        } else {
            if (val >= 1) {
                nums[real] = nums[i]
            } else {
                val++
                real++
                nums[real] = nums[i]
            }
        }
    }
    return real + 1
};
// @lc code=end

