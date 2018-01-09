var _require = require('./helpers'),
    divideAndRound = _require.divideAndRound,
    round = _require.round;

/**
*
* Cycling stats specific functions
*
*/

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
var percentFTPAcc = function percentFTPAcc(adjustedElev) {
  return -1.12 * Math.pow(adjustedElev, 2) - 1.90 * adjustedElev + 99.9;
}; // eslint-disable-line
var percentFTPNAcc = function percentFTPNAcc(adjustedElev) {
  return 0.178 * Math.pow(adjustedElev, 3) - 1.43 * Math.pow(adjustedElev, 2) - 4.07 * adjustedElev + 100;
}; // eslint-disable-line

/**
* elapsed_time, weighted_average_watts, ftp
*/
var calcTssScore = function calcTssScore(et, waw, ftp) {
  return et * waw * (waw / ftp) / (ftp * 3600) * 100;
};
var calcTssScoreRound = function calcTssScoreRound(et, waw, ftp, p) {
  return round(calcTssScore(et, waw, ftp), p);
};

module.exports = {
  calcTssScore: calcTssScore,
  calcTssScoreRound: calcTssScoreRound,
  difficultyIndex: difficultyIndex,
  percentFTPAcc: percentFTPAcc,
  percentFTPNAcc: percentFTPNAcc
};