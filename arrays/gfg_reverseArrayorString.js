

// i/p arr=[100,2,3,4,5,6,9,0]
// o/p arr=[0,9,6,5,4,3,2,100]

// approach -> use two pointers . swap the value at left pointer with right and increment the left and decrement the right pointer


function reverseArray(arr)
{

    let left=0
    let right=arr.length-1

    while(left<right)
    {
        let temp=arr[left]
        arr[left]=arr[right]
        arr[right]=temp

        left++
        right--
    }
    return arr

}

console.log(reverseArray([-3,100,2,5,9,0,1]))