/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 * 
 *  1. 通过计数器  deleteDuplicatesByCount
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


var deleteDuplicates = function(head) {
    if(!head) {
        return head
    }
  
    let hair = new ListNode(-101);
    hair.next= head;

    let pointer = hair;

    while(pointer.next && pointer.next.next) {
        if(pointer.next.val===pointer.next.next.val) {
            let val = pointer.next?.val;
            while(pointer.next.val !== val) {
                pointer.next = pointer.next.next;
            }
        } else {
            pointer = pointer.next;
        }
    }
    return hair.next
};




/**
 * 1. 通过计数器  deleteDuplicatesByCount
 * 使用一个计数器来计数数字出现的次数，如果出现次数大于1，则删除该节点。
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicatesByCount = function(head) {
    if(!head) {
        return head
    }
  
    let node = new ListNode(-101);
    node.next= head;

    let pointer = node;
    let curr = head;
    let count = 0;
    while(curr || curr?.next) {
        if(curr.next?.val===curr.val) {
            count++
            curr = curr.next;
        } else {
            if(!count) {
                pointer.next = curr;   
                pointer = pointer.next;
            }
            count = 0;
            curr = curr.next;
        }
    }
    pointer.next = null
    return node.next
};
// @lc code=end



/**
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。

不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

*/

var deleteDuplicatesArrayElements = function(nums) {
    if(!nums.length) {
        return nums
    }
    let real = 0;
    let val = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[real]) {
            real++
            nums[real] = nums[i]
            val = 0
        } else {
            if(val > 1) {
                nums[real] = nums[i]
            } else {
                val++
                real++
                nums[real] = nums[i]
            }
        }
    }
    return real+1
}