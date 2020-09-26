const { todoFinder } = require('../src/todofinder');

describe('todoFinder', () => {
  test('should success when fully match TODO', () => {
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

  test('should success when TODO is part of the string', () => {
    const records = [
      {
        file: 'test/testfolder/hellotxt111.txt',
        data: 'this is testing TODO\r\nthis is one the task to do',
      },
      {
        file: 'test/testfolder/sub1/sub-file1.txt',
        data: 'this is testing',
      },
    ];

    const result = todoFinder(records);
    expect(result.length).toBe(1);
    expect(result[0].file).toBe('test/testfolder/hellotxt111.txt');
  });
});
