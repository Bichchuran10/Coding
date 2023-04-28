// given a row and column position of an element in the pascal's triangle . find the element in javascript

// formula :
// value = factorial(row) / (factorial(col) * factorial(row - col))
//this formula can be simplified like fact(4)/fact(2)*fact(4-2)
//=> fact(4)/fact(2)*fact(2) => 4*3*2*1/1*2 * 1*2 => 4*3/1*2
//similarly nCr ,n=5, r=3 => 5*4*3/1*2*3. n=3, r=2 => 3*2/1*2.
//So numerator will have no. of terms = r terms, if=r=2 then , n and (n-1)
//denominator will have r terms = which is r,r-1


const findEle=(rowIndex,colIndex)=>
{
    let numerator=1
    let denominator=1
    for(let i=0;i<colIndex;i++)
    {
        numerator*=(rowIndex-i)
    }
    for(let j=0;j<colIndex;j++)
    {
        denominator*=(colIndex-j)
    }

    value=numerator/denominator
    return value
}

console.log(findEle(4,2))