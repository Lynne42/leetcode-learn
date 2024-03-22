/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

/**
1. 自己的解法1：通过排序，将左端点排序，再合并区间
    时间复杂度 O(nlog n) + O(n) + O(1) = O(nlog n)
    空间复杂度 O(n) + O(log n) = O(n)
 
*/

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    const len = intervals.length;
    if (len <= 1) {
        return intervals
    }
    intervals.sort((a, b) => a[0] - b[0])
    let result = []
    let l = intervals[0][0];
    let r = intervals[0][1];
    for(let i = 1; i < len; i++) {
        const [left, right] = intervals[i];
        if(left <= r) {
            l = l
            r = Math.max(r, right)
        } else {
            result.push([l, r])
            l = left
            r = right
        }
    }
    return [...result, [l, r]]

};
// @lc code=end

