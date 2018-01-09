const {
  calcTssScore,
  calcTssScoreRound,
  difficultyIndex,
  percentFTPAcc,
  percentFTPNAcc,
} = require('./cycling');

const {
  adjustedElev500,
  adjustedElev6000,
  arrOfObj,
} = require('./vars');

describe('percentFTPAcc', () => {
  test('250 elv - (user elevation of 25) ', () => {
    expect(percentFTPAcc(adjustedElev500)).toEqual(99.3440390731329);
  });
  test('6000 elv - (user elevation of 25) ', () => {
    expect(percentFTPAcc(adjustedElev6000)).toEqual(51.87925623316708);
  });
});

describe('percentFTPNAcc', () => {
  test('250 elv - (user elevation of 25) ', () => {
    expect(percentFTPNAcc(adjustedElev500)).toEqual(98.87475177375516);
  });
  test('6000 elv - (user elevation of 25) ', () => {
    expect(percentFTPNAcc(adjustedElev6000)).toEqual(63.14491042539609);
  });
});

describe('calcTssScore', () => {
  test('(arrOfObj[0].et, arrOfObj[0].waw arrOfObj[0].ftp) - (user elevation of 25) ', () => {
    expect(calcTssScore(arrOfObj[0].et, arrOfObj[0].waw, arrOfObj[0].ftp)).toEqual(arrOfObj[0].tss);
  });
  test('(calcTssScore(arrOfObj[1].et, arrOfObj[1].waw, arrOfObj[1].ftp) (user elevation of 25) ', () => {
    expect(calcTssScore(arrOfObj[1].et, arrOfObj[1].waw, arrOfObj[1].ftp)).toEqual(arrOfObj[1].tss);
  });
});

describe('calcTssScoreRound', () => {
  test('(arrOfObj[2].et, arrOfObj[2].waw arrOfObj[2].ftp) - defaults to 0 places > 184', () => {
    expect(calcTssScoreRound(arrOfObj[2].et, arrOfObj[2].waw, arrOfObj[2].ftp)).toEqual(arrOfObj[2].tss);
  });
  test('(arrOfObj[3].et, arrOfObj[3].waw, arrOfObj[3].ftp, 2) - set to 2 places > 494.27', () => {
    expect(calcTssScoreRound(arrOfObj[3].et, arrOfObj[3].waw, arrOfObj[3].ftp, 2)).toEqual(arrOfObj[3].tss);
  });
});

describe('difficultyIndex', () => {
  test('(arrOfObj[0].totalEleGain, arrOfObj[0].distance arrOfObj[0].ftp) - (user elevation of 25) ', () => {
    expect(difficultyIndex(arrOfObj[0].totalEleGain, arrOfObj[0].distance)).toEqual(arrOfObj[0].diffI);
  });
  test('(calcTssScore(arrOfObj[1].totalEleGain, arrOfObj[1].distance, arrOfObj[1].ftp) (user elevation of 25) ', () => {
    expect(difficultyIndex(arrOfObj[1].totalEleGain, arrOfObj[1].distance)).toEqual(arrOfObj[1].diffI);
  });
});
