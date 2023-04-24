// 5. Longest Palindromic Substring
// Medium
// 24.8K
// 1.5K
// Companies
// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.


var longestPalindrome = function(s) {

    let res=""
    let maxLength=0
    for(let i=0;i<s.length;i++)
    {
        console.log(`iteration ${i}`)



        //for even case
        let left=i;
        let right=i+1;

        while(left>=0 && right<=s.length-1 && s[left]==s[right])
        {
            console.log("inside even case")
            if(right-left+1>maxLength)
            {
                res=s.substring(left,right+1)
                maxLength=right-left+1
            }
            left--
            right++
        }
        //for odd case
        let l=i
        let r=i
        //console.log(`l is : ${i} and r is ${i}`)

        while(l>=0 && r<=s.length-1 && s[l]==s[r])
        {
            console.log("inside odd case")
            if(r-l+1>maxLength)
            {
                console.log(`l is : ${i} and r is ${i}`)
                res=s.substring(l,r+1)
                console.log(res)
                maxLength=r-l+1
                console.log(maxLength)

            }
            l--
            r++
        }


    }
    return res

}
console.log(longestPalindrome("babad"))
