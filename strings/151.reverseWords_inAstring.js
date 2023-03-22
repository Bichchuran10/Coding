// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


function reverseWords(s)
{

    let array=s.split(' ') //split the string wherever there is spaces
    let reverseString=''
    for(let i=array.length-1;i>=0;i--)
    {
        if(array[i]=='')
        {
            continue; //if it's a space do nothing
        }

        if(reverseString.length>0)
        {
            reverseString+=' ' //if the rev string has a word then put a space after that
        }
        reverseString+=array[i] //add the word to reverseString
    }

    return reverseString

}


console.log(reverseWords("  hello  world  "))