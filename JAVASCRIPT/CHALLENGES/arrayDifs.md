# CASE

## ArrayDifs

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

```javascript
arrayDiff([1, 2], [1]) == [2];
```

If a value is present in b, all of its occurrences must be removed from the other:

```javascript
arrayDiff([1, 2, 2, 2, 3], [2]) == [1, 3];
```

### Beginner Solution

```javascript
function arrayDiff(a, b) {
  var arr = new Array();

  for (var i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) < 0) {
      arr.push(a[i]);
    }
  }

  return arr;
}
```

#### Explanation

- create variable for the result that will be returned `arr`.
- do looping based on data array length variable `a`
- create condition `b.indexOf(a[i]) < 0` if the value pass the condition then do push data to variable `arr`.
- after looping schemes done then do return variable `arr`.

### Intermediate Solution

```javascript
function arrayDiff(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) == -1;
  });
}
```

#### Explanation

- return the a array variable data with method call `a.filter` to generate array result do inside function of filter by returning value that pass checking condition `return b.indexOf(x) == -1;` the return function parent will be parsed to return value as array [1,3] etc.

### Professional Solution

```javascript
function arrayDiff(a, b) {
  return [...a].filter((a) => b.indexOf(a) == -1);
}
```

#### Explanation

- return the a array variable data with method call `[...a]` to generate array result and put condition `b.indexOf(a) == -1` on filter function call after mutation result output `[...a].filter`.
