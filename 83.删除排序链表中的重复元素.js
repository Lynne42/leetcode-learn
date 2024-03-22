/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * 1. 一次循环
 *  借用题目信息，链表中的元素是有序的，那么相同的元素必定相连，因此一次循环删除相同的元素即可
*/
var deleteDuplicates = function(head) {
    if(!head) {
        return head
    }
    let pointer = head;
    while(pointer.next) {
        if(pointer.val === pointer.next.val) {
            pointer.next = pointer.next.next;
        } else {
            pointer = pointer.next;
        }
    }
    return head
};
// @lc code=end

