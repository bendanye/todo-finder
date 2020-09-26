const { todoFinder } = require('../src/todofinder');

describe('todoFinder', () => {
  test('should success', () => {
    const records = [
      {
        file: 'test/testfolder/hellotxt.txt',
        data: 'TODO\r\nthis is one the task to do',
      },
      {
        file: 'test/testfolder/sub1/sub-file1.txt',
        data: 'this is testing',
      },
    ];

    const result = todoFinder(records);
    expect(result.length).toBe(1);
    expect(result[0].file).toBe('test/testfolder/hellotxt.txt');
  });
});
