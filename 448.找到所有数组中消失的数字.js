/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

/**
 * 1. 原地修改    数组: findDisappearedNumbers
 * 2. 借助额外空间 数组: findDisappearedNumbersByArray，时间复杂度 O(n)，空间复杂度 O(n)
 * 3. 借助额外空间 哈希集合Set: findDisappearedNumbersByHashSet
*/
// @lc code=start
/**
 * findDisappearedNumbers
 * 使用两个特点：
 * 1. 数组中的数字都在 1 ~ n 范围内
 * 2. 找1 ~ n中未出现的值
 * 1-n 可以使用数组的下标表示，那么就可以将数组中出现的值，对应的他的下标(值-1)使用一个标记表明这个下标的值出现过，这里使用的是如果下标出现过，则将下标出现的值变成负数
 * 最后不是负数的值的下标+1说明是未出现的数字

 * @param {number[]} nums
 * @return {number[]}
 */

var findDisappearedNumbers = function (nums) {
    
    for (let i = 0; i < nums.length; i++) {
        const abs = Math.abs(nums[i])
        nums[abs - 1] = Math.abs(nums[abs - 1]) * -1;
    }
    let result = []
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= 0) {
            result.push(i+1)
        }
    }
    
    return result
};

var findDisappearedNumbersByArray = function (nums) {
    let arr = new Array(nums.length + 1)
    for (let i = 0; i < nums.length; i++) {
        arr[i + 1] = nums[i]
    }
    let result = []
    for (let i = 1; i < arr.length; i++) {
        if (!arr[i]) {
            result.push(i)
        }
    }
    return result
};
// @lc code=end


var findDisappearedNumbersByHashSet = function (nums) {
    const hashSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (!hashSet.has(nums[i])) {
            hashSet.add(nums[i])
        }
    }
    let arr = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!hashSet.has(i)) {
            arr.push(i)
        }
    }
    return arr
};
