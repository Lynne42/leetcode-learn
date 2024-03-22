/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * 1. 基于快速排序
 * 快速排序每次选择的基准值在一轮比较之后，会出现在正确的位置，
 * 这个位置也是最终在排序好的数组中出现的位置，因此将基准值的位置与k做比较，
 * 每次只选择一半的部分去排序，直到找到基准值与k相同的位置
 * 
 * 这个方法目前在一个case输入中通不过，比如大量数据相同的情况下，
 * 基准值的选择会是最小值/最大值，这个时候排序的时间复杂度会达到n方
 * 
 * 优化方法是，每次找到基准值后，用这个值去比较他相邻的元素同时将相邻的元素下标与k相比较
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function quickSearch(arr, leftIndex, rightIndex, k) {
  if (leftIndex >= rightIndex) {
    return arr[leftIndex];
  }
  let povit = arr[rightIndex];
  let target = leftIndex - 1;
  for (let i = leftIndex; i < rightIndex; i++) {
    if (arr[i] < povit) {
      target++
      [arr[target], arr[i]] = [arr[i], arr[target]];
    }
  }
  target++
  [arr[target], arr[rightIndex]] = [arr[rightIndex], arr[target]];
  console.log(arr, k)
  if(target === k) {
    return arr[target];
  } else if(target < k) {
    while(target < rightIndex) {
      if(arr[target] === arr[target + 1]) {
        target++
        if(target === k) {
          return arr[target]
        }
      } else {
        break
      }
    }
    return quickSearch(arr, target + 1, rightIndex, k)
  } else {
    while(target > leftIndex) {
      if(arr[target] === arr[target - 1]) {
        target--
        if(target === k) {
          return arr[target]
        }
      } else {
        break
      }
    }
    return quickSearch(arr, leftIndex, target - 1, k)
  }
}
var findKthLargest = function (nums, k) {
  let len = nums.length;
  const val = quickSearch(nums, 0, len - 1, len - k);
  return val;
};

// @lc code=end

