const todoFinder = (records) => {
  let result = [];
  records.forEach((record) => {
    if (record.data.includes('TODO')) {
      result.push(record);
    }
  });

  return result;
};

module.exports = {
  todoFinder,
};
