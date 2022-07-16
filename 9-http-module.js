const http = require("node:http");

// Method 1:

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is a breif info about our history");
  } else {
    res.end(`
    <h1> Oops something went wrong</h1>
    <p> The page that you requested is not available at the moment </p>
    <a href='/'>Back to home page</a>

    `);
  }
});

// Method 2:
// ---- another way with SWITCH statement

// const server = http.createServer((res, req) => {
//   switch (req.url) {
//     case "/":
//       res.end("Welcome to our home page");
//       break;

//     case "/about":
//       res.end("Here is a breif info about our history");
//       break;

//     default:
//       res.end("something went wrong");
//       break;
//   }
// });
server.listen(5000);
