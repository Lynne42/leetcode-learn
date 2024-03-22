/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

/**
 * 1. 使用逆序循环
 * 2. 使用递归， 时间复杂度为 O(n)，空间复杂度为 O(n)
    从数组的最后一位开始，
        如果当前位的值不是 9，则当前值设置为0，继续前一位 + 1，
        如果当前位置不是9，则当前位置加1即可
*/



var plusOne = function (digits) {
    const len = digits.length;
    for (let i = len - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
            if (i === 0) {
                return [1, ...digits]
            }
        } else {
            digits[i] += 1;
            return digits
        }
    }
    return digits
};


// @lc code=start
/**
 * 使用递归
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOnefn = function (digits, index) {
    if (digits[index] === 9) {
        digits[index] = 0
        if (index === 0) {
            return [1, ...digits]
        }
        return plusOnefn(digits, index - 1)
    } else {
        return [...digits.slice(0, index), digits[index] + 1, ...digits.slice(index + 1, digits.length)]
    }
};
var plusOneByRecursion = function (digits) {

    return plusOnefn(digits, digits.length - 1)
};

// @lc code=end

