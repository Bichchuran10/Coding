// 2540. Minimum Common Value
// Easy
// 304
// 4
// Companies
// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

 

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:

// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 105
// 1 <= nums1[i], nums2[j] <= 109
// Both nums1 and nums2 are sorted in non-decreasing order.


// Approach-> We will take a min variable which stores the max possible value and a count=0,
// also use a map to store the values which appeared only once at the first Array.
// Then we will check the second array and check if the map contains those values.
// If it does then we will increase the count, and check if the value is les than min, if yes then we set the min to that value.
// In the end, if count>0 then we return min else we return -1 which means there's no common value.




const minCommonValue=(nums1,nums2)=>{

    let count=0
    let min=999999999
    let map=new Map()
    for(let i=0;i<nums1.length;i++)
    {
        if(!map.has(nums1[i]))
        {
            map.set(nums1[i],1)
        }
    }

    console.log(map)

    for(let i=0;i<nums2.length;i++)
    {
        if(map.has(nums2[i]))
        {
            count++
            console.log(nums2[i])
            if(nums2[i]<min)
            {
                min=nums2[i]
            }
        }
    }

    if(count>0)
    {
        return min
    }
    else
    {
        return -1
    }
}

console.log(minCommonValue([1,3,4,5],[2,3,4,5]))