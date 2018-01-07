const {
  difficultyIndex,
  percentFTPAcc,
  percentFTPNAcc,
  calcTssScore,
  calcTssScoreRound,
} = require('./lib/cycling');

const {
  divideAndRound,
  getLastInArray,
  isValid,
  round,
  secondsToTime,
} = require('./lib/helpers');

const {
  kgToPounds,
  metersToFeet,
  metersToMiles,
  metersToKm,
  mpsToKPH,
  mpsToMPH,
  kgToPoundsRound,
  metersToFeetRound,
  metersToMilesRound,
  metersToKmRound,
  mpsToKPHRound,
  mpsToMPHRound,
} = require('./lib/meas-conv');

const {
  mPrefLabel,
  statsConversions,
} = require('./lib/special');

module.exports = {
  round,
  isValid,
  getLastInArray,
  divideAndRound,
  secondsToTime,
  kgToPounds,
  kgToPoundsRound,
  metersToFeet,
  metersToFeetRound,
  metersToMiles,
  metersToMilesRound,
  metersToKm,
  metersToKmRound,
  mpsToKPH,
  mpsToKPHRound,
  mpsToMPH,
  mpsToMPHRound,
  difficultyIndex,
  percentFTPAcc,
  percentFTPNAcc,
  calcTssScore,
  calcTssScoreRound,
  statsConversions,
  mPrefLabel,
};
