/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/** 使用哈希集合的 互异性 特征，去重，判断长度是否等于数组长度
 * 时间复杂度： O(n) 集合元素的添加时间复杂度是O(1)
 * 空间复杂度： O(n) 
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashSet = new Set(nums);
    if (hashSet.size === nums.length) {
        return false
    }
    return true
};


var containsDuplicate = function (nums) {
    let hashSet = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(hashSet.has(nums[i])) {
            return true
        } else {
            hashSet.add(nums[i])
        }

    }
    return false
};

// @lc code=end

/** 2. 排序后再循环
 * 时间复杂度： nlog(n) 
 * 空间复杂度： O(logN) 快排递归调用栈的空间占用
var containsDuplicate = function(nums) {

    let sortNums = nums.sort()
    for(let i = 0; i < sortNums.length - 1; i ++) {
        if(sortNums[i] === sortNums[i + 1]) {
            return true
        } 
    }
    return false
};
*/