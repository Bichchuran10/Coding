// Input: nums = [1,2,3,1]
// Output: true
//  nums = [1,2,3,4]
// Output: false



    let nums = [1,2,3,5,3]
    let map=new Map()
    for(let i=0;i<nums.length;i++)
    {
        if(!map.has(nums[i]))
        {
            map.set(nums[i],1)
        }
        else
        {
            return true
        }
    }
    return false
