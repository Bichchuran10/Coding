// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Input: nums = [1,2,3,4,4,3,2,1], n = 4
// Output: [1,4,2,3,3,2,4,1]


let nums = [2,5,1,3,4,7]
let n = 3
let ans=[]
for(let i=0;i<n;i++)
{
    ans.push(nums[i],nums[i+n])
}

return ans
