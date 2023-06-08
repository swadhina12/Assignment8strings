//Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

function findAnagrams(s, p) {
    const result = [];
    const pFreqMap = new Map();
    const sFreqMap = new Map();
  
    // Build the frequency map for string p
    for (let i = 0; i < p.length; i++) {
      const char = p[i];
      pFreqMap.set(char, (pFreqMap.get(char) || 0) + 1);
    }
  
    let left = 0;
    let right = 0;
    let matchCount = 0;
  
    while (right < s.length) {
      const rightChar = s[right];
  
      // Update the frequency map for the current window in string s
      sFreqMap.set(rightChar, (sFreqMap.get(rightChar) || 0) + 1);
  
      // If the current character is present in both p and the current window of s,
      // increment the match count
      if (pFreqMap.has(rightChar) && sFreqMap.get(rightChar) <= pFreqMap.get(rightChar)) {
        matchCount++;
      }
  
      // If the window size is equal to the length of p, check if it's an anagram
      if (right - left + 1 === p.length) {
        // If all characters in the window are matches, add the left index to the result
        if (matchCount === p.length) {
          result.push(left);
        }
  
        const leftChar = s[left];
  
        // Update the frequency map for the left character as it's going out of the window
        sFreqMap.set(leftChar, sFreqMap.get(leftChar) - 1);
  
        // If the left character is present in both p and the current window of s,
        // decrement the match count
        if (pFreqMap.has(leftChar) && sFreqMap.get(leftChar) < pFreqMap.get(leftChar)) {
          matchCount--;
        }
  
        left++;
      }
  
      right++;
    }
  
    return result;
  }
  
  // Test case
  const s = "cbaebabacd";
  const p = "abc";
  const result = findAnagrams(s, p);
  console.log(result); // Output: [0, 6]
  