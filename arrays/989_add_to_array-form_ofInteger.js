// The array-form of an integer num is an array representing its digits in left to right order.

// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

 

// Example 1:

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234
// Example 2:

// Input: num = [2,7,4], k = 181
// Output: [4,5,5]
// Explanation: 274 + 181 = 455
// Example 3:

// Input: num = [2,1,5], k = 806
// Output: [1,0,2,1]
// Explanation: 215 + 806 = 1021
 

// Constraints:

// 1 <= num.length <= 104
// 0 <= num[i] <= 9
// num does not contain any leading zeros except for the zero itself.
// 1 <= k <= 104


function add(nums,k)
{
    let arr=[]
    //get the number in form of array but in reverse
    while(k!=0)
    {
        let rem=k%10
        arr.push(rem)
        k=Math.floor(k/10)

    }
    console.log(arr)
    //getting the number in original form
    let i=0;
    let j=arr.length-1
    while(i<j)
    {
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        i++;
        j--;

    }
    console.log('the number',arr)
    //converting to string .join("") returns an array as strings

    let firstNumber=nums.join("")
    let secondNumber=arr.join("")



    //adding in number form

    let sum=BigInt(firstNumber)+BigInt(secondNumber)


    return String(sum).split("")   //returning in form of an array


}
console.log(add([2,7,4],1801))




