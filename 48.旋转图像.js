/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let n = matrix.length - 1;
    for (let i = 0; i < n; i++) {
        for (j = 0; j <= n - i; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][n - i];
            matrix[j][n - i] = temp;
        }
    }
};
// @lc code=end

