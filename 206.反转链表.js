/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
    if(!head) {
        return head
    }
    let pre = null
    let curr = head;
    while(curr) {
        let temp = curr.next;
        curr.next = pre;
        pre = curr;
        curr = temp;
    }
    return pre
};
// @lc code=end

