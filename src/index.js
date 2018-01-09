const {
  altitudeIndex,
  difficultyIndex,
  percentFTPAcc,
  percentFTPNAcc,
  calcTssScore,
  calcTssScoreRound,
} = require('./lib/cycling');

const {
  divideAndRound,
  getLastInArray,
  hiConsAvg,
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
  // lib/cycling
  altitudeIndex,
  difficultyIndex,
  percentFTPAcc,
  percentFTPNAcc,
  calcTssScore,
  calcTssScoreRound,
  // lib/helpers
  divideAndRound,
  getLastInArray,
  hiConsAvg,
  isValid,
  round,
  secondsToTime,
  // lib/meas-conv
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
  // lib/special
  mPrefLabel,
  statsConversions,
};
