// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. 
// Examples: 

// Input: arr[] = {5, 20, 3, 2, 50, 80}, n = 78
// Output: Pair Found: (2, 80)

// Input: arr[] = {90, 70, 20, 80, 50}, n = 45
// Output: No Such Pair
//T.C-> O(n)
function pair(arr,difference)
{
    let map=new Map()
    for(let i=0;i<arr.length;i++)
    {
        //console.log(map)
        if(!map.has(arr[i]))
        {
            map.set(arr[i],1)
            //console.log(map)
        }
        
        else
        {
            map.set(arr[i],map.get(arr[i])+1) //updating the frequency
        }
    }
    console.log(map)
    console.log(map.size)

    // map.forEach((values,keys)=>{
    //     console.log(keys,values)
    // })
    for(let j=0;j<map.size;j++)
    {
        if(map.has(Math.abs(difference+arr[j])))
        {
            return[arr[j],difference+arr[j]]
        }
    }
    return -1

}


console.log(pair([5, 20, 2,10,3,3, 50, 80],78))