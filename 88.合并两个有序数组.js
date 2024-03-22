/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let target = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] >= nums2[j]) {
            nums1[target] = nums1[i]
            i--
        } else {
            nums1[target] = nums2[j]
            j--;
        }
        target--;
    }
    while (i >= 0) {
        nums1[target] = nums1[i]
        target--;
        i--;
    }
    while (j >= 0) {
        nums1[target] = nums2[j]
        target--;
        j--;
    }
    return nums1
};
// @lc code=end

