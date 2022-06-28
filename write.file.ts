const fs = require("fs");
const path = require("path");

let target = path.join(__dirname, "src/assets/mytest.js")
console.log("TARGET: " + target);
fs.writeFile(target, "//Hello world", (err) => {
    if(err) {
        console.log(err)
        return;
    }
})
