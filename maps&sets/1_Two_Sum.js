
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
function Twosum()
{
let nums = [2,7,11,15]
let target = 9
let map=new Map()
for(let i=0;i<nums.length;i++)
{
    if(!map.has(target-nums[i]))
    {
        map.set(nums[i],i)
    }
   
    else
    {
        return [map.get(target-nums[i]),i]
        
    }
}
return -1
}
console.log(Twosum())