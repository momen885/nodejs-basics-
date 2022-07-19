// streams : Writeable ,readable , Duplex and Transform

const { createReadStream } = require("fs");

// default size of a buffer is 64kb
// Controlling the size of the buffer with highWaterMark

const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
