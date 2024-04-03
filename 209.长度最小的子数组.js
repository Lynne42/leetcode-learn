/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 * 
 * 1. 使用滑动窗口 minSubArrayLen
 *    题目中是连续的子串，考虑使用滑动窗口，计算窗口中元素的总和，
 *      如果总和小于目标值，则将窗口扩大(右指针右移，同时总和加上当前元素)，
 *      如果总和大于目标值，则记录当前窗口的长度，同时将窗口缩小(左指针左移，同时总和减去当前元素)
 *      循环直到右指针到达数组尾部，同时左指针要小于右指针
 *      
 *      这样一直更新窗口长度，维护一个最小值
 * 
 * 2. 记录前缀和 minSubArrayLenPrevSum
 *    题目想找到的是连续区间内和大于等于目标值的区间长度，那如何得到区间总和呢，也就是区间左侧下标i与区间右侧下标j的总和，相当于0-j的总和减去0-i的总和，所以可以维护一个数组，用来保存前缀和
 *    题目就站换成了： s[j] - s[i] >= target
 *    由于数组中的数都是正数，所以新维护的数组是一个递增的数组
 *    对于每一个s[i],可以二分查找它需要的那个s[j] >= s[i] + target
 *         
 * 
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let left = 0;
    let right = 0;
    let min = Infinity;
    let sums = nums[right];

    while (left <= right && right < nums.length) {

        if (sums >= target) {
            min = right - left + 1 < min ? right - left + 1 : min;
            sums -= nums[left]
            left++
        } else {

            right++
            sums += nums[right]
        }
    }
    if (min < Infinity) {
        return min
    }
    return 0
};
// @lc code=end


var minSubArrayLenPrevSum = function (target, nums) {
    let sums = 0;
    let sumsArr = [];
    let min = Infinity;
    for (let i = 0; i < nums.length; i++) {
        sums += nums[i];
        sumsArr.push(sums)
    }

    for (let i = 0; i < sumsArr.length; i++) {
        let j = binarySearch(sumsArr, i, sumsArr.length - 1, sumsArr[i] + target);
        if(j >= 0) {
            min = j - i < min? j - i : min;
        } else if(sumsArr[i] >= target) {
            min = i + 1 < min? i + 1 : min;
        }
    }
    if(min < Infinity) {
        return min
    } else {
        return 0
    }
}

var binarySearch = function (arr, left, right, target) {
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return -1
}