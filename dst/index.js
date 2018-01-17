var _require = require('./lib/cycling'),
    altitudeIndex = _require.altitudeIndex,
    difficultyIndex = _require.difficultyIndex,
    percentFTPAcc = _require.percentFTPAcc,
    percentFTPNAcc = _require.percentFTPNAcc,
    calcTssScore = _require.calcTssScore;

var _require2 = require('./lib/helpers'),
    capAndSpace = _require2.capAndSpace,
    csvStringToArray = _require2.csvStringToArray,
    divideAndRound = _require2.divideAndRound,
    getLastInArray = _require2.getLastInArray,
    hiConsAvg = _require2.hiConsAvg,
    isValid = _require2.isValid,
    round = _require2.round,
    secondsToTime = _require2.secondsToTime;

var _require3 = require('./lib/meas-conv'),
    kgToPounds = _require3.kgToPounds,
    poundsToKg = _require3.poundsToKg,
    metersToFeet = _require3.metersToFeet,
    ftToMeters = _require3.ftToMeters,
    metersToMiles = _require3.metersToMiles,
    milesToMeters = _require3.milesToMeters,
    metersToKm = _require3.metersToKm,
    kmToMeters = _require3.kmToMeters,
    mpsToKPH = _require3.mpsToKPH,
    kphToMPS = _require3.kphToMPS,
    mpsToMPH = _require3.mpsToMPH,
    mphToMPS = _require3.mphToMPS;

var _require4 = require('./lib/special'),
    mPrefLabel = _require4.mPrefLabel,
    statsConversions = _require4.statsConversions;

var calcTssScoreRound = function calcTssScoreRound(et, waw, ftp, p) {
  return round(calcTssScore(et, waw, ftp), p);
};
var kgToPoundsRound = function kgToPoundsRound(kg, p) {
  return round(kgToPounds(kg), p);
};
var poundsToKgRound = function poundsToKgRound(m, p) {
  return round(poundsToKg(m), p);
};
var metersToFeetRound = function metersToFeetRound(m, p) {
  return round(metersToFeet(m), p);
};
var ftToMetersRound = function ftToMetersRound(m, p) {
  return round(ftToMeters(m), p);
};
var metersToMilesRound = function metersToMilesRound(m, p) {
  return round(metersToMiles(m), p);
};
var milesToMetersRound = function milesToMetersRound(m, p) {
  return round(milesToMeters(m), p);
};
var metersToKmRound = function metersToKmRound(m, p) {
  return round(metersToKm(m), p);
};
var kmToMetersRound = function kmToMetersRound(m, p) {
  return round(kmToMeters(m), p);
};
var mpsToKPHRound = function mpsToKPHRound(m, p) {
  return round(mpsToKPH(m), p);
};
var kphToMPSRound = function kphToMPSRound(m, p) {
  return round(kphToMPS(m), p);
};
var mpsToMPHRound = function mpsToMPHRound(m, p) {
  return round(mpsToMPH(m), p);
};
var mphToMPSRound = function mphToMPSRound(m, p) {
  return round(mphToMPS(m), p);
};

module.exports = {
  // lib/cycling
  altitudeIndex: altitudeIndex,
  difficultyIndex: difficultyIndex,
  percentFTPAcc: percentFTPAcc,
  percentFTPNAcc: percentFTPNAcc,
  calcTssScore: calcTssScore,
  // lib/helpers
  capAndSpace: capAndSpace,
  csvStringToArray: csvStringToArray,
  divideAndRound: divideAndRound,
  getLastInArray: getLastInArray,
  hiConsAvg: hiConsAvg,
  isValid: isValid,
  round: round,
  secondsToTime: secondsToTime,
  // lib/meas-conv
  kgToPounds: kgToPounds,
  poundsToKg: poundsToKg,
  metersToFeet: metersToFeet,
  ftToMeters: ftToMeters,
  metersToMiles: metersToMiles,
  milesToMeters: milesToMeters,
  metersToKm: metersToKm,
  kmToMeters: kmToMeters,
  mpsToKPH: mpsToKPH,
  kphToMPS: kphToMPS,
  mpsToMPH: mpsToMPH,
  mphToMPS: mphToMPS,
  // rounding
  calcTssScoreRound: calcTssScoreRound,
  kgToPoundsRound: kgToPoundsRound,
  poundsToKgRound: poundsToKgRound,
  metersToFeetRound: metersToFeetRound,
  ftToMetersRound: ftToMetersRound,
  metersToMilesRound: metersToMilesRound,
  milesToMetersRound: milesToMetersRound,
  metersToKmRound: metersToKmRound,
  kmToMetersRound: kmToMetersRound,
  mpsToKPHRound: mpsToKPHRound,
  kphToMPSRound: kphToMPSRound,
  mpsToMPHRound: mpsToMPHRound,
  mphToMPSRound: mphToMPSRound,
  // lib/special
  mPrefLabel: mPrefLabel,
  statsConversions: statsConversions
};