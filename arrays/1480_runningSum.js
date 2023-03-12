// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].


//approach -> in the current nums position we need the sum of the curr element and prev element
function runningSum(nums)
{
    for(let i=1;i<nums.length;i++){
        nums[i]=nums[i]+nums[i-1]
    }
    return nums

}
console.log(runningSum([3,1,2,10,1]))