const { getAllFiles } = require('../src/readfiles');

describe('getAllFiles', () => {
  test('should able to get files', () => {
    const result = getAllFiles('test/testfolder');
    expect(result.length).toBe(1);
    expect(result[0].file).toBe('test/testfolder/hellotxt.txt');
    expect(result[0].data).toBe('this is testing');
  });
});
