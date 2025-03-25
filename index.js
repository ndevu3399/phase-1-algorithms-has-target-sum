function hasTargetSum(array, target) {
  // Create a Set to store numbers we have seen
  const seenNumbers = new Set();

  // Loop through the array
  for (let num of array) {
    const complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }
  return false;
}

/* 
  Time Complexity: O(n) - We traverse the array once.
  Space Complexity: O(n) - We store up to n elements in the Set.
*/

/* 
  Pseudocode:
  1. Create an empty Set to store numbers we have seen.
  2. Loop through the array:
     - Compute the complement (target - current number).
     - If the complement is in the Set, return true.
     - Otherwise, add the current number to the Set.
  3. If no pairs sum to target, return false.
*/

/*
  Explanation:
  This function uses a Set to track numbers that have been seen.
  As we iterate through the array, we calculate the complement of each number.
  If the complement has been seen before, we return true.
  Otherwise, we add the current number to the Set and continue.
  This approach ensures an efficient solution with O(n) time complexity.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Custom test cases
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;