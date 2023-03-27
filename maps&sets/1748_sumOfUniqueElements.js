// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: There are no unique elements, and the sum is 0.
// Example 3:

// Input: nums = [1,2,3,4,5]
// Output: 15
// Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.


const sumOfUnique=(nums)=>{
    let map=new Map()
    for(let i=0;i<nums.length;i++)
    {
        if(!map.has(nums[i]))
        {
            map.set(nums[i],1)
        }
        else
        {
            map.set(nums[i],map.get(nums[i]+1))
        }
    }
    console.log(map) //map with the keys as the numbers and values as their frequencies

    let sum=0
    map.forEach((value,key)=>{
            console.log(`key is ${key} and value is ${value}`);
            if(value==1)
            {
                sum+=key
            }
    })
    return sum
}

console.log(sumOfUnique([1,2,3,2]));