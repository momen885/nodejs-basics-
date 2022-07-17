const { readFile, writeFile } = require("fs").promises;

// const utils = require("util");
// const readFilePromise = utils.promisify(readFile);
// const writeFilePromise = utils.promisify(writeFile);

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf-8");
    const second = await readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/subfolder/result-mind-granade.txt",
      `This is Awesome : ${first + second} `,
      { flag: "a" }
    );
    console.log(first);
    console.log(second);
  } catch (e) {
    console.log(e);
  }
};
start();

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
