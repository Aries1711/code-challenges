var data = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];

openOrSenior(data);

function openOrSenior(data) {
  //   console.log(
  //     [].data.map(function (element) {
  //       if (element[0] >= 55 && element[1] >= 7) {
  //         return "Senior";
  //       } else {
  //         return "Open";
  //       }
  //     })
  //   );
  //   return [].data.map(function (element) {
  //     if (element[0] >= 55 && element[1] >= 7) {
  //       return "Senior";
  //     } else {
  //       return "Open";
  //     }
  //   });

  return [...data].map((element) =>
    element[0] >= 55 && element[1] >= 7 ? "Senior" : "Open"
  );

  //   data.map(function (element) {
  //     if (element[0] >= 55 && element[1] >= 7) {
  //       console.log("Senior");
  //       return "Senior";
  //     } else {
  //       console.log("Open");
  //       return "Open";
  //     }
  //   });
}
