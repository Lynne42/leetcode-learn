/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

/**
 * 1. 使用异或, 时间复杂度 O(n)，空间复杂度 O(1)
    - 任何数和 0 做异或运算，结果仍然是原来的数 2 ^ 0 = 2
    - 任何数和其自身做异或运算，结果是 0，即 2 ^ 2 = 0
    - 异或运算满足交换律和结合律，即 a^b^a=b^a^a=b^(a^a)=b^0=b

 * 2. 借用额外空间 - 集合 singleNumberByHashSet， 时间复杂度 O(n)，空间复杂度 O(n)
*/

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {
    let curr = nums[0];
    for(let i = 1; i < nums.length; i++) {
        curr = curr ^ nums[i];
    }
    return curr
};



var singleNumberByHashSet = function(nums) {
    let hash = new Set();
    for(let i = 0; i < nums.length; i++) {
        if(hash.has(nums[i])) {
            hash.delete(nums[i])
        } else {
            hash.add(nums[i])
        }
    }
    return [...hash].pop()
};
// @lc code=end

