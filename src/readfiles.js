const fs = require('fs');
const path = require('path');

const getAllFiles = function (dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function (file) {
    const fileName = dir + path.sep + file;
    const stat = fs.statSync(fileName);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(fileName));
    } else {
      results.push(getFileContent(fileName));
    }
  });
  return results;
};

const getFileContent = (file) => {
  const data = fs.readFileSync(file, { encoding: 'utf8' });
  return {
    file,
    data,
  };
};

module.exports = {
  getAllFiles,
};
