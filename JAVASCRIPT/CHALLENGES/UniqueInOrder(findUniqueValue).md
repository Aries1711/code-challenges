# CASE

## UniqueInOrder

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example :

```javascript
uniqueInOrder("AAAABBBCCDAABBB") == ["A", "B", "C", "D", "A", "B"];
uniqueInOrder("ABBCcAD") == ["A", "B", "C", "c", "A", "D"];
uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3];
```

### Beginner Solution

```javascript
var uniqueInOrder = function (iterable) {
  var uniqueValue = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i + 1]) {
      uniqueValue.push(iterable[i]);
    }
  }
  return uniqueValue;
};
```

#### Explanation

- I create variable uniqueValue as variable to save the result
- Looping the input using for to check input variable value by 1 queue ahead
- Inside looping mechanism make condition to check wheter the current value is not the same as next value by using index pronounce `iterable[i]` and `iterable[i+1]`

### Intermediate Solution

```javascript
var uniqueInOrder = function (iterable) {
  return [].filter.call(iterable, function (a, i) {
    return iterable[i - 1] !== a;
  });
};
```

#### Explanation

- I returned array value from filter.call function to check the iterable value by checking current and next value using `value and index params` = > `function (a, i)`
- then if the value was pass the condition on child function it will return the value to the parent function

### Profesional Solution

```javascript
var uniqueInOrder = function (iterable) {
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};
```

#### Explanation

- I returned array value from filter function by checking the value using checking current and next value using `value and index params` = > `function (a, i)` then after this function child call i continue to filter value by condition ` a !== iterable[i - 1]`;
- `[...iterable]` work to persist the return value will be array type
