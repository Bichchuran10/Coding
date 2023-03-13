// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation: 
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

//approach -> there will always be a space in between two words.Take max as 0. Take count as 1 and increment the count
//once we find space as after the last word we won't have space.
//check if count>max ,if yes , update the max and reset the count to 1.


function noOfWords(sentences)

{

    let max=0
    for(let i=0;i<sentences.length;i++)
    {
        let count=1
        for(let j=0;j<sentences[i].length;j++)
        {
            if(sentences[i][j]==" ")
            {
                count++
            }
        }
        if(count>max)
        {
            max=count
        }
    }
    return max
}

console.log(noOfWords(["alice and bob and zayn love leetcode", "i think so too", "this is great thanks very much"]))