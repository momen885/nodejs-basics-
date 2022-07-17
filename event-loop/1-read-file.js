const { readFile } = require("fs");

console.log("Started First Task ");
// check file path
readFile("../content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(result);
  }
  console.log("Completed First Task ");
});

console.log("Startedt next Task");
