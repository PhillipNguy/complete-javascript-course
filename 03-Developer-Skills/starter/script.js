// Remember, we're gonna use strict mode in all scripts now!
"use strict";

function printForecast(arr) {
  let answer = [];
  for (let x = 0; x < arr.length; x++) {
    answer.push(`... ${arr[x]}C in ${x} days `);
  }
  console.log(answer.join(""));
  return answer;
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
