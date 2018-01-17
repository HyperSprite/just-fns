const {
  altitudeIndex,
  difficultyIndex,
  percentFTPAcc,
  percentFTPNAcc,
  calcTssScore,
} = require('./lib/cycling');

const {
  capAndSpace,
  csvStringToArray,
  divideAndRound,
  getLastInArray,
  hiConsAvg,
  isValid,
  round,
  secondsToTime,
} = require('./lib/helpers');

const {
  kgToPounds,
  poundsToKg,
  metersToFeet,
  ftToMeters,
  metersToMiles,
  milesToMeters,
  metersToKm,
  kmToMeters,
  mpsToKPH,
  kphToMPS,
  mpsToMPH,
  mphToMPS,
} = require('./lib/meas-conv');

const {
  mPrefLabel,
  statsConversions,
} = require('./lib/special');

const calcTssScoreRound = (et, waw, ftp, p) => round(calcTssScore(et, waw, ftp), p);
const kgToPoundsRound = (kg, p) => round(kgToPounds(kg), p);
const poundsToKgRound = (m, p) => round(poundsToKg(m), p);
const metersToFeetRound = (m, p) => round(metersToFeet(m), p);
const ftToMetersRound = (m, p) => round(ftToMeters(m), p);
const metersToMilesRound = (m, p) => round(metersToMiles(m), p);
const milesToMetersRound = (m, p) => round(milesToMeters(m), p);
const metersToKmRound = (m, p) => round(metersToKm(m), p);
const kmToMetersRound = (m, p) => round(kmToMeters(m), p);
const mpsToKPHRound = (m, p) => round(mpsToKPH(m), p);
const kphToMPSRound = (m, p) => round(kphToMPS(m), p);
const mpsToMPHRound = (m, p) => round(mpsToMPH(m), p);
const mphToMPSRound = (m, p) => round(mphToMPS(m), p);

module.exports = {
  // lib/cycling
  altitudeIndex,
  difficultyIndex,
  percentFTPAcc,
  percentFTPNAcc,
  calcTssScore,
  // lib/helpers
  capAndSpace,
  csvStringToArray,
  divideAndRound,
  getLastInArray,
  hiConsAvg,
  isValid,
  round,
  secondsToTime,
  // lib/meas-conv
  kgToPounds,
  poundsToKg,
  metersToFeet,
  ftToMeters,
  metersToMiles,
  milesToMeters,
  metersToKm,
  kmToMeters,
  mpsToKPH,
  kphToMPS,
  mpsToMPH,
  mphToMPS,
  // rounding
  calcTssScoreRound,
  kgToPoundsRound,
  poundsToKgRound,
  metersToFeetRound,
  ftToMetersRound,
  metersToMilesRound,
  milesToMetersRound,
  metersToKmRound,
  kmToMetersRound,
  mpsToKPHRound,
  kphToMPSRound,
  mpsToMPHRound,
  mphToMPSRound,
  // lib/special
  mPrefLabel,
  statsConversions,
};
