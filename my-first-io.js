const fs = require("fs");
const file = process.argv[2]

const buff = fs.readFileSync(file);
const myres = buff.toString()
console.log(myres.split("\n").length - 1);