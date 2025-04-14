const fs = require("node:fs");

console.log('First')
const fileContents = fs.readFileSync("./fs-module/file.txt", "utf-8");
console.log(fileContents);

console.log('Second')
fs.readFile("./fs-module/file.txt", "utf-8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data)
    }
});

console.log("Third");

fs.writeFileSync("./fs-module/greet.txt", "Hello Word!");

fs.writeFile("./fs-module/greet.txt", " Hello Vishwas!", { flag: "a" }, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("File written");
    }
});