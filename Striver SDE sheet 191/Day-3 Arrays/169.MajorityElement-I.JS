// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
//You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

//use hashmap and compare the values with n/2. store the value in a variable and return it
let majority = (nums) => {
  let n = nums.length;

  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }

  console.log(map); //map with frequencies

  let ans = 0;
  map.forEach((value, key) => {
    if (value > Math.floor(n / 2)) {
      ans = key;
    }
  });

  return ans;
};

console.log(majority([3, 2, 3]));
console.log(majority([2, 2, 1, 1, 1, 2, 2]));
