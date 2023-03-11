// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

//Logic-> take two pointers slow and fast .start both of them from the Head. 
//while fast and fast.next exist increment the slow pointer by slow.next and increment the fast pointer by two as fast.next.next. 
//At some point, if slow==fast return true ,else return false if the condition fails.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

let slow=head
let fast=head

while(fast && fast.next)
{
    slow=slow.next;
    fast=fast.next.next;
    if(slow==fast) //a cycle is found
    {
        return true
    }
}
return false

