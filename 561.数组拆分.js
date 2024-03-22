/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分
 */

/**
为了最终 n 个数得到的总和最大，那么一对数字应该尽量是相邻的数字（非相邻数字取最小值可能导致）
1. 排序数组，借助排序算法 arrayPairSumBySort，时间复杂度为 O(n log n)，空间复杂度为 O(log n， 取决于排序算法)

*/

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSumBySort = function(nums) {
    const sortNums = nums.sort((a, b) => a - b);
    let sum = 0;
    for(let i = 0; i < sortNums.length - 1; i = i + 2) {
        sum += sortNums[i]
    }
    return sum
};
// @lc code=end

