// A pair (i, j) is called good if nums[i] == nums[j] and i < j.
// Input: nums = [1,2,3,1,1,3]
// Output: 4

let nums = [1,1,1,1]
let map=new Map()
let count=0
for(let i=0;i<nums.length;i++)
{
    if(!map.has(nums[i]))
    {
        map.set(nums[i],1)
    }
    else
    { //we have a pair
        count=count+map.get(nums[i])
        map.set(nums[i],map.get(nums[i])+1) //increase the frequency
    }
}
console.log(count)
return count