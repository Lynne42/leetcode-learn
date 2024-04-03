/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 * 
 * 1. 使用对撞双指针
 *      题目中找到盛水最多的容器，实际上就是坐标值x * y最大， 这里x是数组元素两个下标的距离，
 *      y是两个元素的比较小的那个。
 * 
 *      常规思考就是双层循环，将i和j取最小值并乘上j - i; 这样时间复杂度过高，继续思考
 * 
 *      要想x*y最大，y跟元素有关没办法直接拿到，但是x最大，很容易知道就是数组的两端
 * 
 *      这里想到使用头尾双指针方法，首先保证x是最大的，然后向中间缩小
 *      
 *      将头指针和尾指针对应的值比较大小，较小的那个下标先移动(比如头指针比较小就让头指针向右移动，尾指针比较小就让尾指针向左移动)，目的是看看是后面是否有比较大的值
 * 
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while (left < right) {
        let target = Math.min(height[left], height[right]) * (right - left)
        if (target > max) {
            max = target
        }
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max
};
// @lc code=end

