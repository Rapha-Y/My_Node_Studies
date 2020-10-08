const path = require("path");

console.log("Base name: ", path.basename(__filename));
console.log("Directory name: ", path.dirname(__filename));
console.log("Extension name: ", path.extname(__filename));

console.log(path.parse(__filename).base);
console.log(path.join(__dirname), "test", "hello.tml");