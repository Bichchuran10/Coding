// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

function maximumSubarray(nums)
{

    let max=-99999;
    let sum=0;
    //Kadane's algorithm
    for(let i=0;i<nums.length;i++)
    {
        sum=sum+nums[i]
        max=Math.max(sum,max) //update the current max only if the current sum is greater than the current max
        if(sum<0) //if sum is less than 0,reset the sum to 0 i.e don't take the elements from starting to that element where sum became 0
        {
            sum=0
        }
    }
    return max


}
console.log(maximumSubarray([-2,1,-3,4,-1,2,1,-5,4]))