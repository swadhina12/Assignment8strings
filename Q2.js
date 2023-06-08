//Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.
function isValid(s) {
    const stack = [];
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (char === '(' || char === '*') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length > 0) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  
    let starCount = 0;
  
    while (stack.length > 0) {
      const top = stack.pop();
  
      if (top === '(') {
        if (starCount === 0) {
          return false;
        } else {
          starCount--;
        }
      } else {
        starCount++;
      }
    }
  
    return true;
  }
  
  // Test case
  const s = "()";
  const result = isValid(s);
  console.log(result); // Output: true
  