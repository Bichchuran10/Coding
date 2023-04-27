// 75. Sort Colors
// Medium

// 
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]
 

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.


let sortColors=(nums)=>{

    let zeroCount=0
    let oneCount=0
    let twoCount=0
    let temp=0


    //storing the counts of 0,1,2 in the array
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]==zeroCount)
        {
            zeroCount++
        }
        if(nums[i]==oneCount)
        {
            oneCount++
        }
        if(nums[i]==twoCount)
        {
            twoCount++
        }
    }
    console.log(zeroCount)
    console.log(oneCount)
    console.log(twoCount)

    while(zeroCount-->0){
        nums[temp]=0
        temp++
    }
    while(oneCount-->0){
        nums[temp]=1
        temp++
    }
    while(twoCount-->0){
        nums[temp]=2
        temp++
    }

    return nums

}

console.log(sortColors([2,0,2,1,1,0]))