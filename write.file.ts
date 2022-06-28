const fs = require("fs");

fs.writeFile("mytest.js", "//Hello world", (err) => {
    if(err) {
        console.log(err)
        return;
    }
})
