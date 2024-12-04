/** 
问题1：
给定一个大小为 n 的正整数 arr[] 数组，任务是找到数组中第二大的不同元素。
如果第二大元素不存在，则返回 -1 。
*/

// @lc code=start


const array = [12, 35, 1, 10, 34, 1];

/*
方式1：先排序， 再倒序查找第二大值
*/
function findSecondLargest(arr) {
    if(!arr || !arr.length) {
        return -1
    }
    const sortArr = arr.sort((a, b) => a - b);
    const len = sortArr.length;
    for(let i = len - 2; i >=0; i--) {
        if(sortArr[i] !== sortArr[i + 1]) {
            return sortArr[i]
        }
    }
    return -1;
}


console.log(findSecondLargest(array))

/*
方式2：二次搜索， 第一次搜索找到最大值， 第二次搜索找到第二大值(排除最大值)
*/
function findSecondLargest2(arr) {
    if(!arr || !arr.length) {
        return -1
    }
    let max = arr[0];
    const len = arr.length;
    for(let i = 1; i <= len - 1; i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }
    let secondMax = -1;
    for(let i = 0; i <= len - 1; i++) {
        if(arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i]
        }
    }

    return secondMax;
}

console.log(findSecondLargest2(array))


/*
方式3：一次搜索， 同时赋值第一大值和第二大值
*/
function findSecondLargest2(arr) {
    if(!arr || !arr.length) {
        return -1
    }
    let max = -1, secondMax = -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            secondMax = max;
            max = arr[i]
        } else if(arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i]
        }
    }
    return secondMax;
}

console.log(findSecondLargest2(array))

/** 
问题2：
给定一个大小为 n 的正整数 arr[] 数组，任务是找到数组中最小值和第二小的值。
如果第二大元素不存在，则返回 -1 。
*/
let array1 = [111, 13, 25, 9, 34, 1];
/*
方式1： 排序
*/
function findSecondSmallest(arr) {
    if(!arr || !arr.length) {
        return null
    }
    const sortArr = arr.sort((a, b) => a - b);
    for(let i = 1; i < sortArr.length; i++) {
        if(sortArr[i] !== sortArr[i - 1]) {
            return sortArr[i]
        }
    }
    return null
}
console.log(findSecondSmallest(array1))

/*
方式2： 一次查询
*/
function findSecondSmallest2(arr) {
    if(!arr || !arr.length) {
        return null
    }
    let small = Number.MAX_VALUE, secondSmall = Number.MAX_VALUE;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < small) {
            secondSmall = small;
            small = arr[i]
        } else if(arr[i] < secondSmall && arr[i] > small) {
            secondSmall = arr[i]
        } 
    }  
    return secondSmall
}
console.log(findSecondSmallest2(array1))
