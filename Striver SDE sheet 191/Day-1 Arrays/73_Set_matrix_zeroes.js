
// 73. LeetCode Medium :

// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

 

// Example 1:


// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]


var setZeroes = function(matrix) {
    

    let rowArray=[] //to store the row position of 0 in the given matrix
    let colArray=[] //to store the column position of 0 in the given matrix

    //storing row,col index of 0's position in the given matrix
    for(let i=0;i<matrix.length;i++)
    {
        for(let j=0;j<matrix[i].length;j++)
        {
            if(matrix[i][j]==0)
            {
                rowArray.push(i)
                colArray.push(j)
            }
        }
    }
    
    //making row,col values as 0 after checking if that particular row,col contains 0
    for(let i=0;i<matrix.length;i++)
    {
        for(let j=0;j<matrix[i].length;j++)
        {
            
            if(rowArray.includes(i) || colArray.includes(j))
            {
                matrix[i][j]=0
            }
        }
    }


    return matrix


}




console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))