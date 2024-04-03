/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 * 
 * 1. 暴力双层循环，列举所有的子串，判断是否是回文
 *      两层 for 循环 O(n*n）for 循环里边判断是否为回文 O(n），所以时间复杂度为 O(n*n*n）
 *    外层循环处理字符串的每个字符，内层循环处理以该字符开始的子串是否是回文
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */




var longestPalindrome1 = function (s) {

    let lower = 0;
    let height = 0;

    for (let i = 0; i < s.length - 1; i++) {
        let j = s.length - 1;
        while (j > i) {
            let [l, h] = isPalindrome(s, i, j);
            if (h - l > height - lower) {
                height = h;
                lower = l;
            }
            j--
        }
    }
    if (height - lower) {
        return s.split('').slice(lower, height + 1).join('');
    }
    return ''
};

var isPalindrome = function (str, i, j) {
    let left = i;
    let right = j;
    while (left < right) {
        if (str.charAt(left) === str.charAt(right)) {
            left++;
            right--;
        } else {
            return "";
        }
    }
    return [i, j];
};
// @lc code=end

