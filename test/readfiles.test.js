const path = require('path');

const { getAllFiles } = require('../src/readfiles');

describe('getAllFiles', () => {
  test('should able to get files', () => {
    const result = getAllFiles('test/testfolder/sub1');
    expect(result.length).toBe(1);
    expect(result[0].file).toBe(`test/testfolder/sub1${path.sep}sub-file1.txt`);
    expect(result[0].data).toBe('this is testing');
  });

  test('should able to get files with subdirectories', () => {
    const result = getAllFiles('test/testfolder');
    expect(result.length).toBe(2);
    expect(result[0].file).toBe(`test/testfolder${path.sep}hellotxt.txt`);
    expect(result[0].data).toBe('TODO\r\nthis is one the task to do');

    expect(result[1].file).toBe(`test/testfolder${path.sep}sub1${path.sep}sub-file1.txt`);
    expect(result[1].data).toBe('this is testing');
  });
});
