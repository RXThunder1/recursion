Product of Nums
Write a function that finds the product of an array of numbers:
product([2, 3, 4])   // 24
​
Longest Word
Given a list of words, return the length of the longest:
longest(["hello", "hi", "hola"])  // 5
​
Every Other Character
Write a function that returns a string of every other character:
everyOther("hello")  // "hlo"
​
Is Palindrome?
Write a function that returns true/false depending on whether passed-in string is a palindrome:
isPalindrome("tacocat")  // true
isPalindrome("tacodog")  // false
​
Find Index
Given an array and a string, return the index of that string in the array (or -1 if not present):
let animals = ["duck", "cat", "pony"];

findIndex(animals, "cat");  // 1
findIndex(animals, "porcupine");   // -1
​
Reverse String
Return a copy of a string, reversed:
revString("porcupine") // 'enipucrop'
​
Gather Strings
Given an object, return an array of all the values in the object that are strings:
let nestedObj = {
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

gatherStrings(nestedObj) // ["Lester", "Testowitz", "you made it!", "nice!"];
​
