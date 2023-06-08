//Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.
function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
      return false;
    }
  
    if (s === goal) {
      const charCount = new Set(s).size;
      return charCount < s.length; // Check if there are duplicate characters
    }
  
    const mismatches = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== goal[i]) {
        mismatches.push(i);
      }
      if (mismatches.length > 2) {
        return false;
      }
    }
  
    return mismatches.length === 2 && s[mismatches[0]] === goal[mismatches[1]] && s[mismatches[1]] === goal[mismatches[0]];
  }
  
  // Test case
  const s = "ab";
  const goal = "ba";
  const canSwap = buddyStrings(s, goal);
  console.log(canSwap); // Output: true
  