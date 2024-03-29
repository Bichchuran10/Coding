// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]); //what if the first intervals starts before the second interval ->[[1,4],[0,4]]

  let stack = [];

  stack.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
    let last = stack[stack.length - 1];
    let curr = intervals[i];

    //check two conditions .

    //1 if overlaps ,merge->
    if (curr[0] <= last[1]) {
      last[1] = Math.max(curr[1], last[1]);
    }

    //2
    else {
      stack.push(curr);
    }
  }

  return stack;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);

console.log(merge([1, 4], [0, 4]));
