const filterFilesFn = require("./filterFiles.js");

let files = filterFilesFn.filterMaker(process.argv[2], process.argv[3], filterFilesFn.errFinder(process.argv[4]));
console.log(files);
