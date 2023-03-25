// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []


// approach -> use two pointers prev=null and current as head . Run a loop till current exists.  take a temp variable to store current.next

// head
// 1 -> 2 -> 3  Say the head/linked list starts with this, and head is the 1 node

// We set up out pointers like this
// prev   cur
// null -> 1 -> 2 -> 3

// In the while loop, after processing, the pointers basically just move to the right after reversing the current pointer
// So...
//        prev cur
// null <- 1 -> 2 -> 3
// ^^ Notice the pointer is flipped for the 1

// We do this till the list looks like this
//                  prev  cur 
// null <- 1 <- 2 <- 3 <- null

// This is why the prev variable is the new head


function reverseList(head)
{
    let prev=null
    current =head

    while(current)
    {
        let temp=current.next; // We move to the right while flipping our pointers, so cur.next will be our new current at the end
        current.next=prev // Since we are reversing pointers, we want to point cur.next at the previous
        prev=current; // We can now update previous, which will be our current since we move to the right 
        current=temp // Current become cur.next, which we saved in the temp var
                                
    }
    return prev // The new head of our reversed linked list will be the prev variable
}
