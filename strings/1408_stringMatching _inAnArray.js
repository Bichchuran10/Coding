// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".

function stringMatching(words)
{

    words.sort((a,b)=>a.length-b.length)
    let res=[]
    for(let i=0;i<words.length;i++)
    {
        for(let j=i+1;j<words.length;j++)
        {
            if(words[j].includes(words[i]))
            {
                res.push(words[i])
                break; //break is important to stop duplicate words
            }
        }
    }
    return res
}

console.log(stringMatching(["mass","as","hero","superhero"]))