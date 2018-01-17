const {
  altitudeIndex,
  calcTssScore,
  difficultyIndex,
  percentFTPAcc,
  percentFTPNAcc,
} = require('./cycling');

const {
  adjustedElev500,
  adjustedElev6000,
  arrOfObj,
  userElv,
  targetElvA,
  targetElvB,
} = require('./vars');

describe('altitudeIndex', () => {
  test('(targetElvA, userElv) - 0.25425', () => {
    expect(altitudeIndex(targetElvA, userElv)).toEqual(0.25425);
  });
  test('(targetElvB, userElv) - 5.75425', () => {
    expect(altitudeIndex(targetElvB, userElv)).toEqual(5.75425);
  });
});

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

describe('Combined: altIndex and percentFTPAcc', () => {
  test('(targetElvA, userElv) - 99.34452477', () => {
    expect(percentFTPAcc(altitudeIndex(targetElvA, userElv))).toEqual(99.34452477);
  });
  test('N(targetElvB, userElv) - 63.14546998894553', () => {
    expect(percentFTPNAcc(altitudeIndex(targetElvB, userElv))).toEqual(63.14546998894553);
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

describe('difficultyIndex', () => {
  test('(arrOfObj[0].totalEleGain, arrOfObj[0].distance arrOfObj[0].ftp) - (user elevation of 25) ', () => {
    expect(difficultyIndex(arrOfObj[0].totalEleGain, arrOfObj[0].distance)).toEqual(arrOfObj[0].diffI);
  });
  test('(calcTssScore(arrOfObj[1].totalEleGain, arrOfObj[1].distance, arrOfObj[1].ftp) (user elevation of 25) ', () => {
    expect(difficultyIndex(arrOfObj[1].totalEleGain, arrOfObj[1].distance)).toEqual(arrOfObj[1].diffI);
  });
});
