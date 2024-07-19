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
var deleteMiddle = function (head) {
    if (!head || !head.next) {
        return null; // if the list is empty or has only one node, return null
    }

    let slow = head;
    let fast = head;
    let prev = null;

    // Move fast by two steps and slow by one step
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    // Delete the middle node
    prev.next = slow.next;

    return head;
};
