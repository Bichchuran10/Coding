// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0


//Approach-> two pointers . Left at 0 and right at 1.Take max profit as 0. while right is less than prices length
//check if left prices are greater than right , if yes then increase the left pointer to right, else calculate
//curr profit by right prices - left prices and take the max of curr profit and max profit.
//on each iteration increment right pointer.Return max_profit
function buySell(prices)
{
let max_profit=0
let left=0
let right=1

    while(right<prices.length)
    {
        if(prices[left]>prices[right])
        {
            left=right
        }
        else
        {
            let currProfit=prices[right]-prices[left]
            max_profit=Math.max(currProfit,max_profit);

        }
        right++
    }
    return max_profit


}

console.log(buySell([7,1,5,3,6,4,9]));