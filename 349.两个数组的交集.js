/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

    let hashSet1 = new Set(nums1);
    let hashSet2 = new Set(nums2);
    
    let arr = [];
    if(hashSet1.size > hashSet2.size) {
        for(let key of hashSet2.values()) {
            if(hashSet1.has(key)) {
                arr.push(key)
            }
        }
    } else {
        for(let key of hashSet1.values()) {
            if(hashSet2.has(key)) {
                arr.push(key)
            }
        }
    }
    
    return arr
};
// @lc code=end

