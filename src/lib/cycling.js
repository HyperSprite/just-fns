const {
  divideAndRound,
  round,
} = require('./helpers');

/**
*
* Cycling stats specific functions
*
*/

/**
* Difficulty Index
* TODO needs test
*/
const difficultyIndex = (totalEleGain, distance) => round(divideAndRound(totalEleGain, distance, 6) * 200, 2);

/**
* percentFTPAcc takes (elevation - user.elevation * 0.01) and returns acclimated power
* percentFTPNAcc takes (elevation - user.elevation * 0.01) and returns non acclimated power
* e.g adjustedElev would be .500 - .025
*/
const percentFTPAcc = adjustedElev => -1.12 * (Math.pow(adjustedElev, 2)) - 1.90 * adjustedElev + 99.9; // eslint-disable-line
const percentFTPNAcc = adjustedElev => 0.178 * (Math.pow(adjustedElev, 3)) - 1.43 * (Math.pow(adjustedElev, 2)) - (4.07 * adjustedElev) + 100; // eslint-disable-line

/**
* elapsed_time, weighted_average_watts, ftp
*/
const calcTssScore = (et, waw, ftp) => ((et * waw * (waw / ftp)) / (ftp * 3600)) * 100;
const calcTssScoreRound = (et, waw, ftp, p) => round(calcTssScore(et, waw, ftp), p);

module.exports = {
  calcTssScore,
  calcTssScoreRound,
  difficultyIndex,
  percentFTPAcc,
  percentFTPNAcc,
};
