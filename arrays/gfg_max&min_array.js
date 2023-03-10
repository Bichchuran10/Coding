// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//               Maximum element is: 9

// Input: arr[] = {22, 14, 8, 17, 35, 3}
// Output:  Minimum element is: 3
//               Maximum element is: 35

//we can also sort the array to find it

// Approach 1:

// let nums=[22, 14, 8, -9999900,17, 35, 3]
// let min=9999999
// let max=-9999999

// for(let i=0;i<nums.length;i++)
// {
//     if(nums[i]<min)
//     {
        
//         min=nums[i]
        
//     }
//     else if(nums[i]>max)
//     {
//         max=nums[i]
        
//     }
// }

// console.log('minimum number is :',min)
// console.log('maximum number is',max)

nums=[3, 5, 4, 1, 9,-9999001,999981]

nums.sort((a,b)=>a-b)

console.log('minimum number is ',nums[0])
console.log('maximum number is ',nums[nums.length-1])
