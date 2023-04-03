// 383. Ransom Note
// Easy
// 3.8K
// 407
// Companies
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.


var canConstruct = function(ransomNote, magazine) {
    let arr=new Array(26).fill(0)

    for(let i=0;i<ransomNote.length;i++)
    {
        arr[ransomNote.charCodeAt(i)-97]++
    }

    console.log(arr)

    for(let i=0;i<magazine.length;i++)
    {
        if(arr[magazine.charCodeAt(i)-97]!=0)
        {
            arr[magazine.charCodeAt(i)-97]--
        }
    }
    console.log(arr)

    for(let j=0;j<arr.length;j++)
    {
        if(arr[j]!=0)
        {
            return false
        }
    }
    return true
    
};

console.log(canConstruct('aa','aab'))