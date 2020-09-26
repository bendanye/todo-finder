const { todoFinder } = require('./todofinder');
const { getAllFiles } = require('./readfiles');

const allFiles = getAllFiles(process.cwd());
const result = todoFinder(allFiles);

result.forEach((element) => {
  console.log(element.file);
});
