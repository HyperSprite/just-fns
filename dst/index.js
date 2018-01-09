var _require = require('./lib/cycling'),
    altitudeIndex = _require.altitudeIndex,
    difficultyIndex = _require.difficultyIndex,
    percentFTPAcc = _require.percentFTPAcc,
    percentFTPNAcc = _require.percentFTPNAcc,
    calcTssScore = _require.calcTssScore,
    calcTssScoreRound = _require.calcTssScoreRound;

var _require2 = require('./lib/helpers'),
    divideAndRound = _require2.divideAndRound,
    getLastInArray = _require2.getLastInArray,
    hiConsAvg = _require2.hiConsAvg,
    isValid = _require2.isValid,
    round = _require2.round,
    secondsToTime = _require2.secondsToTime;

var _require3 = require('./lib/meas-conv'),
    kgToPounds = _require3.kgToPounds,
    metersToFeet = _require3.metersToFeet,
    metersToMiles = _require3.metersToMiles,
    metersToKm = _require3.metersToKm,
    mpsToKPH = _require3.mpsToKPH,
    mpsToMPH = _require3.mpsToMPH,
    kgToPoundsRound = _require3.kgToPoundsRound,
    metersToFeetRound = _require3.metersToFeetRound,
    metersToMilesRound = _require3.metersToMilesRound,
    metersToKmRound = _require3.metersToKmRound,
    mpsToKPHRound = _require3.mpsToKPHRound,
    mpsToMPHRound = _require3.mpsToMPHRound;

var _require4 = require('./lib/special'),
    mPrefLabel = _require4.mPrefLabel,
    statsConversions = _require4.statsConversions;

module.exports = {
  // lib/cycling
  altitudeIndex: altitudeIndex,
  difficultyIndex: difficultyIndex,
  percentFTPAcc: percentFTPAcc,
  percentFTPNAcc: percentFTPNAcc,
  calcTssScore: calcTssScore,
  calcTssScoreRound: calcTssScoreRound,
  // lib/helpers
  divideAndRound: divideAndRound,
  getLastInArray: getLastInArray,
  hiConsAvg: hiConsAvg,
  isValid: isValid,
  round: round,
  secondsToTime: secondsToTime,
  // lib/meas-conv
  kgToPounds: kgToPounds,
  metersToFeet: metersToFeet,
  metersToMiles: metersToMiles,
  metersToKm: metersToKm,
  mpsToKPH: mpsToKPH,
  mpsToMPH: mpsToMPH,
  kgToPoundsRound: kgToPoundsRound,
  metersToFeetRound: metersToFeetRound,
  metersToMilesRound: metersToMilesRound,
  metersToKmRound: metersToKmRound,
  mpsToKPHRound: mpsToKPHRound,
  mpsToMPHRound: mpsToMPHRound,
  // lib/special
  mPrefLabel: mPrefLabel,
  statsConversions: statsConversions
};