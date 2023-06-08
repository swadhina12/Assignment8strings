//Given an encoded string, return its decoded string.
function decodeString(s) {
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== ']') {
        stack.push(s[i]);
      } else {
        let currentStr = '';
        let repeatStr = '';
  
        // Extract the repeated string
        while (stack.length && stack[stack.length - 1] !== '[') {
          currentStr = stack.pop() + currentStr;
        }
        stack.pop(); // Remove the '['
  
        // Extract the repetition count
        while (stack.length && !isNaN(stack[stack.length - 1])) {
          repeatStr = stack.pop() + repeatStr;
        }
        const repeatCount = parseInt(repeatStr);
  
        // Repeat the current string and push it back to the stack
        for (let j = 0; j < repeatCount; j++) {
          stack.push(currentStr);
        }
      }
    }
  
    return stack.join('');
  }
  
  // Test case
  const s = '3[a]2[bc]';
  const decodedString = decodeString(s);
  console.log(decodedString); // Output: 'aaabcbc'
  