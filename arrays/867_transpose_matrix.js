// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]
// Example 2:

// Input: matrix = [[1,2,3],[4,5,6]]
// Output: [[1,4],[2,5],[3,6]]

//matrix = [[1,2,3],[4,5,6],[7,8,9]]

function transpose(matrix)
{
    let res=[]
    for(let i=0;i<matrix.length;i++)
    {
        for(let j=0;j<matrix[0].length;j++)
        {
            if(res[j]==null)
            {
                res[j]=[]
            }
            res[j][i]=matrix[i][j]
        }
    }
    return res
}

console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))