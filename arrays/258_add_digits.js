// Input: num = 38
// Output: 2
// Explanation: The process is
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 
// Since 2 has only one digit, return it.

// Input: num = 0
// Output: 0


function addDigits(num)
{
    let sum=0;
    while(num>0)
    {
        let rem=num%10;
        sum=sum+rem
        num=Math.floor(num/10)

        if(num==0 && sum>=10)
        {
            num=sum;
            sum=0;
        }
    }
    return sum

}

console.log(addDigits(38))
