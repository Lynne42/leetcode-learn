/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 * 1. 借助双向指针： isPalindrome1
 *      首先替换非字母和非数字字符，然后转化为小写字母，最后双指针遍历
 *  
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
    let str = s.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str.charAt(left++) !== str.charAt(right--)) {
            return false
        }

    }
    return true;
};

// @lc code=end

