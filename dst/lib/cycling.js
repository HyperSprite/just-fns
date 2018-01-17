var _require = require('./helpers'),
    divideAndRound = _require.divideAndRound,
    round = _require.round;

/**
*
* Cycling stats specific functions
*
*/

/**
* altitudeIndex receives the target elevation and the user elevation in Meters and returns the Altidude Index
* used in calculating Percentage of FTP at Altitude below.
*/

var altitudeIndex = function altitudeIndex(targetElev, userElev) {
  return targetElev * 0.001 - userElev * 0.01;
};

/**
* Difficulty Index
*/
var difficultyIndex = function difficultyIndex(totalEleGain, distance) {
  return round(divideAndRound(totalEleGain, distance, 6) * 200, 2);
};

/**
* percentFTPAcc takes (elevation - user.elevation * 0.01) and returns acclimated power
* percentFTPNAcc takes (elevation - user.elevation * 0.01) and returns non acclimated power
* e.g adjustedElev would be .500 - .025
*/
var percentFTPAcc = function percentFTPAcc(altiIndx) {
  return -1.12 * Math.pow(altiIndx, 2) - 1.90 * altiIndx + 99.9;
}; // eslint-disable-line
var percentFTPNAcc = function percentFTPNAcc(altiIndx) {
  return 0.178 * Math.pow(altiIndx, 3) - 1.43 * Math.pow(altiIndx, 2) - 4.07 * altiIndx + 100;
}; // eslint-disable-line

/**
* elapsed_time, weighted_average_watts, ftp
*/
var calcTssScore = function calcTssScore(et, waw, ftp) {
  return et * waw * (waw / ftp) / (ftp * 3600) * 100;
};

module.exports = {
  altitudeIndex: altitudeIndex,
  calcTssScore: calcTssScore,
  difficultyIndex: difficultyIndex,
  percentFTPAcc: percentFTPAcc,
  percentFTPNAcc: percentFTPNAcc
};