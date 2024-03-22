/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let emptyIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[emptyIndex] = nums[i];
            emptyIndex++;
        }
    }
};

// @lc code=end

/**
 * 
 * @param {*} nums 
 * @param {*} val 

var removeElement2 = function(nums, val) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        if(nums[left] === val) {
            nums[left] = nums[right];
            right--;
        } else {
            left++;
        }
    }
};

 */

/**
 * removeElement 和 removeElement2的区别
 * removeElement指针方式，通常需要将指针右边的元素移动到指针左边，尤其是左边有相同元素的情况下，每一步都需要移动
 * removeElement2前后双指针的形式，当左侧有重复元素的时候，将右侧末尾的值移动到左侧的位置，最大程度的减少了内部元素移动的次数
 * removeElement2 是 removeElement 的一种优化方式，前提是题目说数组元素顺序可以改变
*/