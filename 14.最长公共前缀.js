/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

/**
 * 1. 纵向对比字符串的对应列字符是否相等 longestCommonPrefixByVertical
 * 2. 横向对比 longestCommonPrefix
*/

// @lc code=start
/** 
 * @param {string[]} strs
 * @return {string}
 */
/**
 * 2. 横向对比
 * 对比字符串，同时更新公共前缀
*/
function updatePrefix(pre, str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) !== pre.charAt(i)) {
            return pre.substring(0, i)
        }
    }
    if(str.length < pre.length) {
        return str;
    }
    return pre;
}
var longestCommonPrefix = function (strs) {
    let prefix = strs[0];
    let len = strs.length;

    for (let i = 1; i < len; i++) {
        prefix = updatePrefix(prefix, strs[i])
    }
    return prefix;
};
// @lc code=end

/**
 * 1. 纵向对比
 * 对比字符串的每一列字符，判断对应列的字符是否相等
*/
var longestCommonPrefixByVertical = function (strs) {
    let str = strs[0];
    let len = strs.length - 1;
    
    for (let i = 0; i < str.length; i++) {
        for (let j = 1; j <= len; j++) {
            if (strs[j]?.charAt(i) !== str[i]) {
                return str.substring(0, i)
            }
        }
        
    }
    return str;
};
