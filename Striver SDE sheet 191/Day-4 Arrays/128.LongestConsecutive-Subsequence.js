// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9

function longestConsecutiveSubsequence(nums) {
  let maxStreak = 0; //max
  let set = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    //checking if map doesn't contains previous of the currNumber
    if (!set.has(nums[i] - 1)) {
      let currNum = nums[i]; //currNum could be the start of a streak
      let currStreak = 1; //streak will be 1

      while (set.has(currNum + 1)) {
        //at this point we know prev doesn't exist,check next exists.
        currNum += 1; //if yes then increment the currNum to the nextNum
        currStreak += 1; //increment the streak
      }
      maxStreak = Math.max(maxStreak, currStreak); ///take the maximum of maxStreak and currStreak
    }
  }
  return maxStreak; //return the maxStreak
}

console.log(longestConsecutiveSubsequence([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutiveSubsequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
