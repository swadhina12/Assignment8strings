//You need to construct a binary tree from a string consisting of parenthesis and integers.

class TreeNode {
    constructor(val, left, right) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  function str2tree(s) {
    if (s === "") {
      return null;
    }
  
    // Find the root value
    let i = 0;
    while (i < s.length && (s[i] !== "(" && s[i] !== ")")) {
      i++;
    }
    const rootVal = parseInt(s.substring(0, i));
    const root = new TreeNode(rootVal);
  
    // Find the substring for the left child
    let start = i;
    let count = 0;
    while (i < s.length) {
      if (s[i] === "(") {
        count++;
      } else if (s[i] === ")") {
        count--;
      }
  
      if (count === 0) {
        break;
      }
  
      i++;
    }
  
    if (start + 1 < i) {
      root.left = str2tree(s.substring(start + 1, i));
    }
  
    // Find the substring for the right child
    start = i + 1;
    count = 0;
    while (i < s.length) {
      if (s[i] === "(") {
        count++;
      } else if (s[i] === ")") {
        count--;
      }
  
      if (count === 0) {
        break;
      }
  
      i++;
    }
  
    if (start + 1 < i) {
      root.right = str2tree(s.substring(start + 1, i));
    }
  
    return root;
  }
  
  // Test case
  const s = "4(2(3)(1))(6(5))";
  const root = str2tree(s);
  console.log(root);
  