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
* altitudeIndex receives the target elevation and the user elevation in Meters and returns the Altidude Index
* used in calculating Percentage of FTP at Altitude below.
*/

const altitudeIndex = (targetElev, userElev) => ((targetElev * 0.001) - (userElev * 0.01));

/**
* Difficulty Index
*/
const difficultyIndex = (totalEleGain, distance) => round(divideAndRound(totalEleGain, distance, 6) * 200, 2);

/**
* percentFTPAcc takes (elevation - user.elevation * 0.01) and returns acclimated power
* percentFTPNAcc takes (elevation - user.elevation * 0.01) and returns non acclimated power
* e.g adjustedElev would be .500 - .025
*/
const percentFTPAcc = altiIndx => -1.12 * (Math.pow(altiIndx, 2)) - 1.90 * altiIndx + 99.9; // eslint-disable-line
const percentFTPNAcc = altiIndx => 0.178 * (Math.pow(altiIndx, 3)) - 1.43 * (Math.pow(altiIndx, 2)) - (4.07 * altiIndx) + 100; // eslint-disable-line

/**
* elapsed_time, weighted_average_watts, ftp
*/
const calcTssScore = (et, waw, ftp) => ((et * waw * (waw / ftp)) / (ftp * 3600)) * 100;
const calcTssScoreRound = (et, waw, ftp, p) => round(calcTssScore(et, waw, ftp), p);

module.exports = {
  altitudeIndex,
  calcTssScore,
  calcTssScoreRound,
  difficultyIndex,
  percentFTPAcc,
  percentFTPNAcc,
};
