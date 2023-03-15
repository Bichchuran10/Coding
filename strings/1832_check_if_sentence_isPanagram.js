// A pangram is a sentence where every letter of the English alphabet appears at least once.

// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

 

// Example 1:

// Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
// Output: true
// Explanation: sentence contains at least one of every letter of the English alphabet.
// Example 2:

// Input: sentence = "leetcode"
// Output: false

// approach-> Use an array of size 26 and fill it with 0s. Use charCodeAt(index)-97 (since all are small caps) and increment the index.
// iterate over the array and check if zero is found at any place, if yes return false. Else return true


function panagram(sentence)
{
    let arr=new Array(26).fill(0)
    for(let i=0;i<sentence.length;i++)
    {
        arr[sentence.charCodeAt(i)-97]++
    }
    console.log(arr)

    for(let j=0;j<arr.length;j++)
    {
        if(arr[j]==0)
        {
            return false
        }
    }
    return true
}

console.log(panagram("thequickbrownfoxjumpsoverthelazydog"))

