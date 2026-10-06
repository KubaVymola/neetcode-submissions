/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (head === null || head.next === null) {
            return
        }

        let slow = head
        let fast = head

        while (fast.next && fast.next.next) {
            slow = slow.next!
            fast = fast.next.next
        }

        let second = slow.next
        slow.next = null

        let previous = null
        let current = second

        while (current !== null) {
            const next = current.next

            current.next = previous
            previous = current
            current = next
        }

        let first = head
        second = previous

        while (second !== null) {
            const firstNext = first.next
            const secondNext = second.next

            first.next = second
            second.next = firstNext

            first = firstNext
            second = secondNext
        }

    }
}
