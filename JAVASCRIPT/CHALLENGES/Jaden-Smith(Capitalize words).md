# CASE

## Jaden Smith (AKA Sentence Words Uppercase)

Description:

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

### Beginner Solution

```javascript
String.prototype.toJadenCase = function () {
  var returnResult = [];
  var words = this.toLowerCase().split(" ");
  for (var i = 0; i < words.length; i++) {
    word = words[i];
    returnResult.push(word[0].toUpperCase() + word.slice(1));
  }
  return returnResult.join(" ");
};
```

#### explanation

- I created a dummy array (returnString)
- Split the input string into individual words
- Wrote a ‘for loop’
- Each individual word is accessed
- each word, treated as an array, has the element at index ‘0’ capitalized, and then the rest of the word added starting from index ‘1’, is pushed into dummy array
- return the dummy array as a string joined with a space

### Intermediate Solution

```javascript
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
};
```

#### Explanation

- this is very similar to my solution, except instead of using a ‘for loop’ they are using the ‘.map’ function.
  similar, but a little more sleek.

### Professional Solution

```javascript
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function (x) {
    return x.toUpperCase();
  });
};
```

#### Explanation

- This is the solution I would have liked to come up with.
- Use regEx to find the first alpha-numeric element following a space
- capitalize it.
