// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.

var firstUniqChar = function(s) {

        let frequenceArray=new Array(26).fill(0)

        for(let i=0;i<s.length;i++)
        {
            frequenceArray[s.charCodeAt(i)-97]++
        }

        console.log(frequenceArray)

        for(let i=0;i<s.length;i++)
        {
            if(frequenceArray[s.charCodeAt(i)-97]==1)
            {
                console.log('the character is : ',String.fromCharCode(s.charCodeAt(i)))
                return i
            }
        }
        return -1


}

console.log(firstUniqChar("z"))
console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("loveleetcoder"))
console.log(firstUniqChar("dddccdbba"))