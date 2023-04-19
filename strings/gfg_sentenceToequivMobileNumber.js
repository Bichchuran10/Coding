// Input: GEEKSFORGEEKS
// Output: 4333355777733366677743333557777
// Explanation: For obtaining a number, we need to press a number corresponding to that character for a number of times equal to the position of the character.
//  For example, for character E, press number 3 two times and accordingly.
// Input : HELLO WORLD
// Output : 4433555555666096667775553


const mobileNumber=(string)=>{

    let array= ["2", "22", "222",
       "3", "33", "333",
       "4", "44", "444",
       "5", "55", "555",
       "6", "66", "666",
       "7", "77", "777", "7777",
       "8", "88", "888",
       "9", "99", "999", "9999" ]
       
let res=""

for(let i=0;i<string.length;i++)
{
  
  if(string[i]==" ")
  {
    res+=0
  }
  else
  {
   res+=array[string.charCodeAt(i)-'65']  //since capital letters
  }
}

return res


}


console.log(mobileNumber("HELLO WORLD"))