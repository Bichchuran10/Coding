// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"

// Constraints:

// 0 <= s.length <= 1000
// t.length == s.length + 1
// s and t consist of lowercase English letters.


function findDifference(s,t)
{
    let arr1=s.split("").sort() 
    let arr2=t.split("").sort()
    console.log(arr1)
    console.log(arr2)

    for(let i=0;i<arr2.length;i++)
    {
        if(arr1[i]!=arr2[i])
        {
            return arr2[i]
        }
    }
}

console.log(findDifference("abcd","abcde"))