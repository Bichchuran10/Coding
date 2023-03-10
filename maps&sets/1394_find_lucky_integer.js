// Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

// Return the largest lucky integer in the array. If there is no lucky integer return -1


// Input: arr = [1,2,2,3,3,3]
// Output: 3
// Explanation: 1, 2 and 3 are all lucky numbers, return the largest of them.

let arr=[4,4,4,4,1,1,1,2,2,3,3,3,7,7]

arr.sort((a,b)=>a-b)  //sorting to have the largest number at last

let map=new Map()
let res=-1

//to find out the frequencies of each number
for(let i=0;i<arr.length;i++)
{
    if(!map.has(arr[i]))
    {
        map.set(arr[i],1)
    }
    else
    {
        map.set(arr[i],map.get(arr[i])+1)
    }
}

//compare the keys,values of map. If its equal then store it in the result
map.forEach((value,key)=>{
    if(value==key)
    {
        res=key
    }
})
console.log(res)
return res

