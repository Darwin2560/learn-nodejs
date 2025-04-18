const fs = require("node:fs/promises");

async function readFile() {
    try {
        const data = await fs.readFile("./fs-module/file.txt", "utf-8");
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

readFile();

// console.log("First")

// fs.readFile("./fs-module/file.txt", "utf-8")
// .then((data) => console.log(data))
// .catch((error) => console.log(error))

// console.log("Second")

// const fs = require("node:fs");

// console.log('First')
// const fileContents = fs.readFileSync("./fs-module/file.txt", "utf-8");
// console.log(fileContents);

// console.log('Second')
// fs.readFile("./fs-module/file.txt", "utf-8", (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data)
//     }
// });

// console.log("Third");

// fs.writeFileSync("./fs-module/greet.txt", "Hello Word!");

// fs.writeFile("./fs-module/greet.txt", " Hello Vishwas!", { flag: "a" }, (err) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("File written");
//     }
// });