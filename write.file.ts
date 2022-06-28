const fs = require("fs");

fs.writeFile("./src/assets/mytest.js", "//Hello world", (err) => {
    if(err) {
        console.log(err)
        return;
    }
})
