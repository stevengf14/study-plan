/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {

    public ListNode deleteMiddle(ListNode head) {
        if (head == null || head.next == null) {
            return null; // if the list is empty or has only one node, return null
        }

        // Use two pointers, slow and fast. Slow will point to the middle node.
        ListNode slow = head;
        ListNode fast = head;
        ListNode prev = null;

        // Move fast by two steps and slow by one step
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
        }

        // Delete the middle node
        prev.next = slow.next;

        return head;
    }
}
