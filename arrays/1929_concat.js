// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.


let nums = [1,2,1]
let n=nums.length

let ans=[]

for(let i=0;i<nums.length;i++)
{
    ans[i]=nums[i]
    ans[i+n]=nums[i]

}
return ans