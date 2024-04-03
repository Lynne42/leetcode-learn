/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 * 1. 基于堆排序选择: findKthLargest
 *    先将整个数组建成最大堆，在逐个删除堆顶元素并重建最大堆，直到删除到第k个堆顶元素，即为第k个最大值
 * 
 * 2. 基于堆排序: findKthLargestByHeepSort
 *    先全数组排序，再取出第K个元素
 * 
 * 3. 基于快速排序: findKthLargestByQuickSort, 速度慢
 */

var findKthLargest = function (nums, k) {
  // 首先建成一个最大堆, 建立完成后数组的第一个元素就是最大值
  createMaxHeep(nums)
  const len = nums.length;
  
  /**
   * 将堆顶元素(也就是数组的第一个元素)与数组的后面的元素交换，从而重新调整堆的结构，这一过程也是堆排序的过程。
   * 每一次调整都会产生一个最大值位于数组的第一个元素，因此只需要调整k- 1次即可。
   * 调整k - 1次后，数组的第一个元素就是第k大元素。
  */
  for(let i = len - 1; i >= len - k + 1; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    heepify(nums, 0, i)
  }
  return nums[0]
}


function createMaxHeep(nums) {
  let len = nums.length;
  let index = Math.floor(len / 2) - 1;
  for(let i = index; i >= 0; i--) {
    heepify(nums, i, len);
  }
}

function heepify(nums, i, len) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let target = i;

    if(left < len && nums[left] > nums[target]) {
      target = left;
    }
    if(right < len && nums[right] > nums[target]) {
      target = right;
    }
    if(target !== i) {
      [nums[target], nums[i]] = [nums[i], nums[target]];
      heepify(nums, target, len);
    }
}




/**
 * 2. 堆排序，取出第length - k 的下标的元素
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargestByHeepSort = function (nums, k) {
  createMaxHeep(nums)

  for(let i = len - 1; i >=  0; i--) {
    [nums[i], nums[0]] = [nums[0], nums[i]];
    heepify(nums, 0, i);
  }
  return nums[nums.length - k];
};


// @lc code=start
/**
 * 3. 基于快速排序: findKthLargestByQuickSort
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
var findKthLargestByQuickSort = function (nums, k) {
  let len = nums.length;
  const val = quickSearch(nums, 0, len - 1, len - k);
  return val;
};

// @lc code=end

