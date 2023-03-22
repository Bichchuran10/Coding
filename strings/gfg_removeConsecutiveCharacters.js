// Remove Consecutive Characters

// Given a string S. For each index i(1<=i<=N-1), erase it if s[i] is equal to s[i-1] in the string.

// Example 1:

// Input:
// S = aabb
// Output:  ab 
// Explanation: 'a' at 2nd position is
// appearing 2nd time consecutively.
// Similiar explanation for b at
// 4th position.

// Example 2:

// Input:
// S = aabaa
// Output:  aba
// Explanation: 'a' at 2nd position is
// appearing 2nd time consecutively.
// 'a' at fifth position is appearing
// 2nd time consecutively.

function removeConsecutive(string)
{
    let res=''
    for(let i=0;i<string.length;i++)
    {
        if(string[i]==string[i-1])
        {
            continue;
        }
        res=res+string[i]
    }
    return res

}
//console.log(removeConsecutive('aabbccd'))
console.log(removeConsecutive('aabbaaaaaccdddddddd'))
