// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

//Approach-> Use an array of size 26 (i.e total no. of alphabets) and fill with 0s
//iterate through s and increase the count of charCode if a char is found.
//iterate through t and decrease the count of charCode if similar char is found
//iterate through the arr and check if at any index the value is not 0, if yes then return false. Else return true

function validAnagram(s,t)
{
    let arr=new Array(26).fill(0)
    for(let i=0;i<s.length;i++)
    {
        arr[s.charCodeAt(i)-97]++
    }
    console.log(arr)

    for(let j=0;j<t.length;j++)
    {
        arr[t.charCodeAt(j)-97]--
    }
    console.log(arr)

    for(let k=0;k<arr.length;k++)
    {
        if(arr[k]!=0)
        {
            return false
        }
    }
    return true
}

console.log(validAnagram("anagram","nagaram"));
//console.log(validAnagram("rat","car"));
