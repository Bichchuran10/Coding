// 229. Majority Element II
// Medium

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]

//use hashmap and compare the values with n/3. push the values in an array and return the array
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

  let ans = [];
  map.forEach((value, key) => {
    if (value > Math.floor(n / 3)) {
      ans.push(key);
    }
  });

  return ans;
};

console.log(majority([3, 2, 3]));
console.log(majority([1, 2]));
