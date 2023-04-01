// 1189. Maximum Number of Balloons
// Easy
// 1.4K
// 81
// Companies
// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

// Example 1:



// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0
 

// Constraints:

// 1 <= text.length <= 104
// text consists of lower case English letters only.

// Approach -> We will use variables b,a,l,o,n and will set their count to 0. 
// we will iterate through the string and check if these variables are found , 
// if yes then we increase the count. 
// We will divide l and o by 2 since they appear twice in the word balloon.
// Take the min count of all words and that will be the answer.

const maxNoBallons=(string)=>{

    let b=0,a=0,l2=0,o2=0,n=0

    for(let i=0;i<string.length;i++)
    {
    
        if(string[i]=='b')
        {
            b++
        }
        else if(string[i]=='a')
        {
            a++
        }
        else if(string[i]=='l')
        {
            l2++
        }
        else if(string[i]=='o')
        {
            o2++
        }
        else if(string[i]=='n')
        {
            n++
        }
    }

    l2=Math.floor(l2/2)
    o2=Math.floor(o2/2)

    let ans=Math.min(b,a,l2,o2,n)

    return ans
}


console.log(maxNoBallons("loonbalxballpoon"))