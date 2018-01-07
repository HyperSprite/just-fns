var _require = require('./cycling'),
    calcTssScore = _require.calcTssScore,
    calcTssScoreRound = _require.calcTssScoreRound,
    percentFTPAcc = _require.percentFTPAcc,
    percentFTPNAcc = _require.percentFTPNAcc;

var _require2 = require('./vars'),
    adjustedElev500 = _require2.adjustedElev500,
    adjustedElev6000 = _require2.adjustedElev6000,
    arrOfObj = _require2.arrOfObj;

describe('percentFTPAcc', function () {
  test('250 elv - (user elevation of 25) ', function () {
    expect(percentFTPAcc(adjustedElev500)).toEqual(99.3440390731329);
  });
  test('6000 elv - (user elevation of 25) ', function () {
    expect(percentFTPAcc(adjustedElev6000)).toEqual(51.87925623316708);
  });
});

describe('percentFTPNAcc', function () {
  test('250 elv - (user elevation of 25) ', function () {
    expect(percentFTPNAcc(adjustedElev500)).toEqual(98.87475177375516);
  });
  test('6000 elv - (user elevation of 25) ', function () {
    expect(percentFTPNAcc(adjustedElev6000)).toEqual(63.14491042539609);
  });
});

describe('calcTssScore', function () {
  test('(arrOfObj[0].et, arrOfObj[0].waw arrOfObj[0].ftp) - (user elevation of 25) ', function () {
    expect(calcTssScore(arrOfObj[0].et, arrOfObj[0].waw, arrOfObj[0].ftp)).toEqual(arrOfObj[0].tss);
  });
  test('(calcTssScore(arrOfObj[1].et, arrOfObj[1].waw, arrOfObj[1].ftp) (user elevation of 25) ', function () {
    expect(calcTssScore(arrOfObj[1].et, arrOfObj[1].waw, arrOfObj[1].ftp)).toEqual(arrOfObj[1].tss);
  });
});

describe('calcTssScoreRound', function () {
  test('(arrOfObj[2].et, arrOfObj[2].waw arrOfObj[2].ftp) - defaults to 0 places > 184', function () {
    expect(calcTssScoreRound(arrOfObj[2].et, arrOfObj[2].waw, arrOfObj[2].ftp)).toEqual(arrOfObj[2].tss);
  });
  test('(arrOfObj[3].et, arrOfObj[3].waw, arrOfObj[3].ftp, 2) - set to 2 places > 494.27', function () {
    expect(calcTssScoreRound(arrOfObj[3].et, arrOfObj[3].waw, arrOfObj[3].ftp, 2)).toEqual(arrOfObj[3].tss);
  });
});