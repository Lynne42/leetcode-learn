/** 
问题：
给定一个大小为 n 的正整数 arr[] 数组，任务是找到数组中第二大的不同元素。
如果第二大元素不存在，则返回 -1 。
*/

// @lc code=start
/*
方式1：先排序， 再倒序查找第二大值

*/
function findSecondLargest(arr) {
    const sortArr = arr.sort((a, b) => a - b);
    const len = sortArr.length;
    for(let i = len - 2; i >=0; i--) {
        if(sortArr[i] !== sortArr[i + 1]) {
            return sortArr[i]
        }
    }
    return -1;
}

const array = [12, 35, 1, 10, 34, 1];
console.log(findSecondLargest(array))