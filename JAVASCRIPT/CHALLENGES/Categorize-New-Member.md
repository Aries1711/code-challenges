# CASE

## Categorize New Member

Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output
Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

```javascript
input = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"];
```

### Beginner Solution

```javascript
function openOrSenior(data) {
  return [...data].map(function (element) {
    if (element[0] > 55 && element[1] > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
}
```

#### Explanation

- this is very similar to my solution, except instead of using a ‘for loop’ they are using the ‘.map’ function.
  similar, but a little more sleek [missing documentation].

### Intermediate Solution

```javascript
function openOrSenior(data) {
  return [...data].map((element) =>
    element[0] > 55 && element[1] > 7 ? "Senior" : "Open"
  );
}
```

#### Explanation

- this is very similar to my solution, except instead of using a ‘for loop’ they are using the ‘.map’ function.
  similar, but a little more sleek [source code include documentation].

### Profesional Solution

```javascript
function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age > 54 && handicap > 7 ? "Senior" : "Open"
  );
}
```

#### Explanation

- this is very similar to my solution, except instead of using a ‘for loop’ they are using the ‘.map’ function.
  similar, but a little more sleek [source code include documentation].
