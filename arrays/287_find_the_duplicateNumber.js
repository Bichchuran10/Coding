

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.
// Input: nums = [1,3,4,2,2]
// Output: 2

//approach - take two pointers slow and fast both start at the first element. 
//first phase -> move slow = nums[slow] and fast =nums[nums[fast]] while slow is not equal to fast. 
//Once its equal. Reset the fast pointer to the initial position and again start the loop this time both slow=nums[slow] and fast=nums[fast]
//return slow when condition fulfills. this will give us the duplicate number
function duplicateNumber(nums)
{

    let slow=nums[0] 
    let fast=nums[0] 

    do{
        slow=nums[slow] 
        fast=nums[nums[fast]]
        
    }
    while(slow!=fast)

    fast=nums[0]
    while(slow!=fast)
    {
        slow=nums[slow]
        fast=nums[fast]
    }
    return slow

}

console.log(duplicateNumber([3,1,3,4,2]))