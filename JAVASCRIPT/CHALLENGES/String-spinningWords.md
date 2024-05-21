# CASE

## Spinning Words

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five `5` or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Example :
`"Hey fellow warriors"  --> "Hey wollef sroirraw"`
`"This is a test        --> "This is a test"`
`"This is another test" --> "This is rehtona test"`

If a value is present in b, all of its occurrences must be removed from the other:

### Beginner Solution

```javascript
function spinWords(a) {
  return a
    .split(" ")
    .map(function (word) {
      var wordSpinnning = "";
      if (word.length > 4) {
        for (var i = word.length - 1; i >= 0; i--) {
          wordSpinnning += word[i]; // or newString = newString + str[i];
        }
        word = wordSpinnning;
      }
      return word;
    })
    .join(" ");
}
```

#### Explanation

- The input string a is split into an array of words using the `split(" ")` method. This splits the string at each space character.
- The `map` function is used to iterate over each word in the array. For each word, the callback function (anonymous function) is executed.
- Inside the callback function, `wordSpinnning` is initialized to an empty string. This will be used to build the reversed word if it meets the condition.
- The length of the current word is checked. If the word has more than four letters, the following code block will reverse the word.
- A for loop runs from the last character of the word `(word.length - 1)` to the first character `(i >= 0)`. In each iteration, the character at index `i` is appended to `wordSpinnning`, effectively reversing the word.
- After the loop, wordSpinnning contains the reversed word. This reversed word is assigned back to word.
- The callback function returns the modified (or unmodified) word.
- After the map function has processed all words, the array of words is joined back into a single string with spaces between the words using the join(" ") method.
- The final string, with words longer than four characters reversed, is returned by the function.

### Intermediate Solution

```javascript
function spinWords(words) {
  return words
    .split(" ")
    .map(function (word) {
      return word.length > 4 ? word.split("").reverse().join("") : word;
    })
    .join(" ");
}
```

#### Explanation

- The input string words is split into an array of words using the split(" ") method. This splits the string at each space character.
- The map function is used to iterate over each word in the array. For each word, the callback function (an anonymous function) is executed.
- `return word.length > 4 ? word.split("").reverse().join("") : word;` Inside the callback function, a ternary operator is used to check the length of the word.
- After the map function has processed all words, the array of words is joined back into a single string with spaces between the words using the `join(" ")` method.

### Professional Solution

```javascript
function spinWords(string) {
  return string.replace(/\w{5,}/g, function (w) {
    return w.split("").reverse().join("");
  });
}
```

#### Explanation

- return the a array variable data with method call `[...a]` to generate array result and put condition `b.indexOf(a) == -1` on filter function call after mutation result output `[...a].filter`.
