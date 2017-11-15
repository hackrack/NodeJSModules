const fs = require('fs');
const path = require('path');

const errFinder = (error, retval) => error? console.log(error) :retval;

const filterMaker = (folder, ext, cb) => {
  let filtered = [];
  fs.readdir(folder, (err, files) => {
    if (err) {
      cb(err);
      return;
    }
    files.filter(function(file) {
      if (path.extname(file) === "."+ext) {
        cb(null, filtered.push(file));
      }
    })
    console.log(filtered);
  })
  return filtered;
}
console.log(filterMaker("./", "js", errFinder));

module.exports = {
  filterMaker, errFinder
}
