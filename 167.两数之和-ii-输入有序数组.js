/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while(left < right) {
        let sum = numbers[left] + numbers[right];
        if(sum === target) {
            return [++left, ++right]
        }
        if(sum < target) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return []
};
// @lc code=end

