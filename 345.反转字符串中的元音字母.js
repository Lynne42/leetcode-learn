/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 * 
 * 法1. reverseVowels
 *      - 使用头尾双指针
 *      - 将字符串分割成数组
 *      - 遍历数组，找到元音字母并交换位置
 * 法2. reverseVowelsByString
 *      - 使用头尾双指针
 *      - 找到元音字母，并重新拼接字符串
 * 
 * 
 * 选择法1，是因为截取和拼接字符串工作是非常耗时的，而借助数组可以
 *          直接替换对应下标的值
 * 
 * 
 * 总结：
 *      1. 字符串的截取和拼接是非常耗时的，这时可以考虑使用空间来换取时间
 *      2. 使用正则匹配也是比价耗时的，简单的少量的字符判断可以直接使用 穷举/条件等
 */

// @lc code=start


var reverseVowels = function(s) {
    let left = 0;
    let right = s.length - 1;
    let yuanyin = 'aeiouAEIOU';
    const isNotYuanyin = (char) => yuanyin.indexOf(char) === -1;
    let arr = s.split('');
    while(left < right) {

        while(left < right && isNotYuanyin(arr[left])) {
            left++;
        }
        while(left < right && isNotYuanyin(arr[right])) {
            right--;
        }
        if(left >= right) {
          return arr.join('')
        }
      
        [arr[left], arr[right]] = [arr[right], arr[left]];
 
        left++;
        right--;
    }
    return arr.join('');
};

var reverseVowels1 = function(s) {
    let left = 0;
    let right = s.length - 1;
    let reg = /^[aeiouAEIOU]$/; 
    let arr = s.split('');
    while(left < right) {

        while(left < right && !reg.test(arr[left])) {
            left++;
        }
        while(left < right && !reg.test(arr[right])) {
            right--;
        }
        if(left >= right) {
          return arr.join('')
        }
      
        [arr[left], arr[right]] = [arr[right], arr[left]];
 
        left++;
        right--;
    }
    return arr.join('');
};


/**
 * @param {string} s
 * @return {string}
 */
var reverseVowelsByString = function (s) {
    let left = 0;
    let right = s.length - 1;
    let reg = /^[aeiouAEIOU]$/;
    while (left < right) {
        while (left < right && !reg.test(s.charAt(left))) {
            left++;
        }
        while (left < right && !reg.test(s.charAt(right))) {
            right--;
        }
        if (left >= right) {
            return s
        }
        s = s.substring(0, left) + s.charAt(right) + s.substring(left + 1, right) + s.charAt(left) + s.substring(right + 1);
        left++;
        right--;
    }
    return s;
};
// @lc code=end

