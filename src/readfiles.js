const fs = require('fs');

const getAllFiles = function (dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function (file) {
    const fileName = dir + '/' + file;
    const stat = fs.statSync(fileName);
    if (stat && stat.isDirectory()) {
      /* Go into a subdirectory */
      results = results.concat(getAllFiles(fileName));
    } else {
      /* Is a file, get the content */
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
