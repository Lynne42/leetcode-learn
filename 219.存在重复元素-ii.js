/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

/**
 * 最大长度为k的滑动框口，滑动窗口内如果有重复元素，说明符合题意
 * 如果长度超出滑动窗口时，需要将窗口最左边的元素删除
 * 
 * 实际上比较好理解的滑动窗口是 双层for循环，但是时间复杂度过高，不考虑使用
 * 
 * 这里使用哈希集合来保存元素，通过哈希集合唯一性的特性，来确认是否有重复元素
*/
var containsNearbyDuplicate = function (nums, k) {
    const hashSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if(i > k) {
            hashSet.delete(nums[i - k - 1])
        }
        if(hashSet.has(nums[i])) {
            return true
        } else {
            hashSet.add(nums[i])
        }
    }
    return false
};

var containsNearbyDuplicate2 = function (nums, k) {
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            const index = hashMap.get(nums[i])
            if (i - index <= k) {
                return true
            } else {
                hashMap.set(nums[i], i)
            }
        } else {
            hashMap.set(nums[i], i)
        }
    }
    return false
};
// @lc code=end

