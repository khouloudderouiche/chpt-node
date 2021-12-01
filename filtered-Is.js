const fs = require('fs');
const path = require("path");
const dir = process.argv[2]
console.log(dir)
console.log(process.argv[3])
fs.readdir(dir,(err,files)=>{
    if( err)
    console.log(err)
    else{
        files.filter(file=>{
            (file.includes('.md'))&& console.log(file)
        })
    }
})