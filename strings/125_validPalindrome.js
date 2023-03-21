// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.


function isPlaindrome(s)
{

    let string=s.toLowerCase().split('') //make it lower case and get it in the form of an array
    console.log(string)
    
    let res=[]
    for(let i=0;i<string.length;i++)
    {
        if(string[i]>='a' && string[i]<='z' || string[i]>='0' && string[i]<='9')
        {
            res.push(string[i])
        }
    }
    console.log(res)

    let left=0
    let right=res.length-1
    while(left<right)
    {
        if(res[left]==res[right])
        {
            left++
            right--
        }
        else
        {
            console.log('left',left,res[left])
            console.log('right',right,res[right])
            return false
        }
    }
    return true


}

console.log(isPlaindrome('A man, a plan, a canal: Panama'))