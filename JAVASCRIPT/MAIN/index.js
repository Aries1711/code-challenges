// DEBUG DECLARE VARIABLE HERE
// var data = [
//   [18, 20],
//   [45, 2],
//   [61, 12],
//   [37, 6],
//   [21, 21],
//   [78, 9],
// ];

// DEBUG FUNCTION HERE
// openOrSenior(data);

// DEBUG FUNCTION SOLUTION HERE
// function openOrSenior(data) {
//   return [...data].map((element) =>
//     element[0] >= 55 && element[1] >= 7 ? "Senior" : "Open"
//   );
// }

var a = "Hey fellow warriors";

spinWords(a);

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
