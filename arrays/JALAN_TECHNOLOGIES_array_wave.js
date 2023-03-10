// Write a function shuffle(arr)that takes input an array of numbers and returns an array by ordering the
// numbers in following fashion:
// a1 <= a2 >= a3 <= a4 >= ....
// Please note that there are multiple outputs that are possible for a given array. Your function can return
// one possible output.
// Example: If input is [2, 1, 5, 3, 11, 7], one possible output could be [2, 7, 3, 11, 1, 5]


function arrayWave(nums)
{

nums.sort((a,b)=>b-a) //sorting in decreasing order
for(let i=0;i<nums.length;i=i+2) //shuffling two places at once so increment the i as i+2
{
    //swapping
    let temp=nums[i]
    nums[i]=nums[i+1]
    nums[i+1]=temp

}
return nums


}



console.log(arrayWave([2, 1, 5, 3, 11, 7]));



