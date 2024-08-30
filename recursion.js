function product(nums) {
    // Base case: If the array is empty, return 1 (identity for multiplication)
    if (nums.length === 0) {
      return 1;
    }
    
    // Recursive case: Multiply the first element by the product of the rest of the array
    return nums[0] * product(nums.slice(1));
  }
  
  // Test
  console.log(product([2, 3, 4])); // 24

  

  function longest(words) {
    // Base case: If there's only one word, return its length
    if (words.length === 1) {
      return words[0].length;
    }
    
    // Recursive case: Compare the length of the first word with the longest of the rest
    const restLongest = longest(words.slice(1));
    return Math.max(words[0].length, restLongest);
  }
  
  // Test
  console.log(longest(["hello", "hi", "hola"])); // 5



  function everyOther(str) {
    // Base case: If the string is empty or has only one character, return it
    if (str.length <= 1) {
      return str;
    }
    
    // Recursive case: Return the first character and recursively process every other character in the substring
    return str[0] + everyOther(str.slice(2));
  }
  
  // Test
  console.log(everyOther("hello")); // "hlo"



  function isPalindrome(str) {
    // Base case: If the string is empty or a single character, it's a palindrome
    if (str.length <= 1) {
      return true;
    }
    
    // Recursive case: Check the first and last characters, and recurse on the substring in between
    if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, -1));
    }
    
    return false;
  }
  
  // Test
  console.log(isPalindrome("tacocat")); // true
  console.log(isPalindrome("tacodog")); // false



  function findIndex(arr, str, index = 0) {
    // Base case: If we've checked all elements, return -1
    if (index >= arr.length) {
      return -1;
    }
    
    // Recursive case: Check if the current element matches the string
    if (arr[index] === str) {
      return index;
    }
    
    // Recursively check the next element
    return findIndex(arr, str, index + 1);
  }
  
  // Test
  const animals = ["duck", "cat", "pony"];
  console.log(findIndex(animals, "cat")); // 1
  console.log(findIndex(animals, "porcupine")); // -1



  function revString(str) {
    // Base case: If the string is empty or a single character, return it
    if (str.length <= 1) {
      return str;
    }
    
    // Recursive case: Reverse the substring and append the first character at the end
    return revString(str.slice(1)) + str[0];
  }
  
  // Test
  console.log(revString("porcupine")); // "enipucrop"



  function gatherStrings(obj) {
    let result = [];
    
    function helper(subObj) {
      for (let key in subObj) {
        if (typeof subObj[key] === 'string') {
          result.push(subObj[key]);
        } else if (typeof subObj[key] === 'object' && subObj[key] !== null) {
          helper(subObj[key]);
        }
      }
    }
    
    helper(obj);
    return result;
  }
  
  // Test
  const nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
      lastName: "Testowitz"
    },
    funFacts: {
      moreStuff: {
        anotherNumber: 100,
        deeplyNestedString: {
          almostThere: {
            success: "you made it!"
          }
        }
      },
      favoriteString: "nice!"
    }
  };
  
  console.log(gatherStrings(nestedObj)); // ["Lester", "Testowitz", "you made it!", "nice!"]