//Given an array of characters chars, compress it using the following algorithm:

function compress(chars) {
    let writeIdx = 0; // Position to write the compressed characters
    let count = 1; // Count of consecutive repeating characters
  
    for (let i = 0; i < chars.length; i++) {
      // Check if the next character is the same
      if (i + 1 < chars.length && chars[i] === chars[i + 1]) {
        count++;
      } else {
        chars[writeIdx] = chars[i]; // Write the character
  
        // If the count is greater than 1, write the count
        if (count > 1) {
          const countStr = count.toString();
          for (let j = 0; j < countStr.length; j++) {
            chars[++writeIdx] = countStr[j];
          }
        }
  
        writeIdx++;
        count = 1; // Reset the count
      }
    }
  
    return writeIdx;
  }
  
  // Test case
  const chars = ["a", "a", "b", "b", "c", "c", "c"];
  const newLength = compress(chars);
  console.log(newLength); // Output: 6
  console.log(chars.slice(0, newLength)); // Output: ["a", "2", "b", "2", "c", "3"]
  