// 119. Pascal's Triangle II
// s
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33


const generateNthRow=(rowIndex)=>
{
    let res=[]
    let val=1 //first element will always be 1

    //to get the elements
    for(let j=0;j<=rowIndex;j++)
    {
        res.push(val) //pushing the ele into res array
        val=val*((rowIndex-j)/(j+1))      // prev val*some factor will always be equal to the next element in the pascals triangle.
    }
    return res
}

console.log(generateNthRow(3))
console.log(generateNthRow(2))
console.log(generateNthRow(0))