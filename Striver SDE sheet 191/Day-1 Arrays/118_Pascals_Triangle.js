// 118. Pascal's Triangle
// Easy
// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
 

// Constraints:

// 1 <= numRows <= 30

const generatePascals=(numRows)=>{
    
    let i=0;
    let j=0;
    let res=[] //to store the result output

    for(let i=0;i<numRows;i++) //to generate the rows 
    {
        res.push(Array(i+1)) //pushing arr of length i+1 to store the generated values 

        for(let j=0;j<=i;j++) //to generate the elements of each row
        {
            if(j==0 || j==i) //if it's the first or last element of a row then it has to be 1.rule of pascals triangle
            {
                res[i][j]=1
            }
            else //that value has to be the sum of two adjacent element in the previous row //rule of pascalse triangle
            {
                    res[i][j]=res[i-1][j-1] + res[i-1][j] //value of curr elem is sum of prev rows left ele and top/right ele  of the curr ele
            }
        }
    }
    return res
}

console.log(generatePascals(5))