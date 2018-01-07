/**
* General use functions
*/

const round = (val, place = 0) => Number(Math.round(val + `e${place}`) + `e-${place}`); // eslint-disable-line

const isValid = (val, type) => {
  switch (type) {
    case 's':
      return typeof val === 'string';
    default:
      return Number.isFinite(val);
  }
};

const secondsToTime = (sec) => {
  const nDays = Math.floor(sec / 86400);
  const nHours = Math.floor((sec % 86400) / 3600);
  const nMinutes = Math.floor(((sec % 86400) % 3600) / 60);
  // const nSeconds = ((sec % 86400) % 3600) % 60;
  return nDays ? `${nDays} days ${nHours}:${nMinutes}` : `${nHours}:${nMinutes}`;
};

const getLastInArray = (arr, arrType) => {
  let item;
  if (arr && arr.length > 0 && arr[arr.length - 1][arrType] != null) {
    item = arr[arr.length - 1][arrType];
  }
  return item;
};

const divideAndRound = (divideThis, byThis, p) => {
  if (!isValid(divideThis) || !isValid(byThis || !byThis)) {
    return 0;
  }
  return round(((divideThis * 1) / (byThis * 1)), p);
};

/**
*
* Measurement conversion functions
*
*/
const kgToPounds = kg => kg * 2.20462;
const metersToFeet = m => m * 3.28084;
const metersToMiles = m => m * 0.00062137121212121;
const metersToKm = m => m / 1000;
const mpsToKPH = m => m * 3.6;
const mpsToMPH = m => m * 2.2369;

const kgToPoundsRound = (kg, p) => round(kgToPounds(kg), p);
const metersToFeetRound = (m, p) => round(metersToFeet(m), p);
const metersToMilesRound = (m, p) => round(metersToMiles(m), p);
const metersToKmRound = (m, p) => round(metersToKm(m), p);
const mpsToKPHRound = (m, p) => round(mpsToKPH(m), p);
const mpsToMPHRound = (m, p) => round(mpsToMPH(m), p);

/**
*
* Cycling stats specific functions
*
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

/**
*
* Formatting functions
*
*/

/**
* metric = 'time', 'dst', 'elev', 'cal', 'kj' type: string
* yAxis = bool - for recharts
* data = non-formatted number, like time in seconds, dist in meters.
* mPref = true for Imperial, false for Metric
*/
const statsConversions = (metric, yAxis, data, mPref) => {
  if (data || data === 0) {
    switch (metric) {
      case 'time':
        return secondsToTime(data);
      case 'dst':
        return mPref ? metersToMilesRound(data, 1) : metersToKmRound(data, 1);
      case 'spd':
        return mPref ? mpsToMPHRound(data, 1) : mpsToKPHRound(data, 1);
      case 'elev':
        return mPref ? metersToFeetRound(data, 0) : round(data, 0);
      case 'cal':
      case 'kj':
        return round(data, 0);
      default:
        return data;
    }
  }
  if (yAxis) {
    switch (metric) {
      case 'time':
        return secondsToTime;
      case 'dst':
        return metersToMilesRound;
      case 'elev':
        return metersToFeetRound;
      default:
        return null;
    }
  }
  return null;
};

// metric = 'speedS', 'speedL' 'dstS', 'dstL', 'temp' type: string
// mPref = true for SAE, false for Metric
// returns an object { display: , help: } : { display: , help: };
const mPrefLabel = (metric, mPref) => {
  switch (metric) {
    case ('speedS'):
      return mPref ?
        { display: 'fps', help: 'Feet per Second' } :
        { display: 'm/s', help: 'Meters / Second' };
    case ('speedL'):
      return mPref ?
        { display: 'mph', help: 'Miles per Hour' } :
        { display: 'km/h', help: 'Kilometers / Hour' };
    case ('dstS'):
      return mPref ?
        { display: 'ft', help: 'Feet' } :
        { display: 'm', help: 'Meters' };
    case ('dstL'):
      return mPref ?
        { display: 'mi', help: 'Miles' } :
        { display: 'km', help: 'Kilometers' };
    case ('temp'):
      return mPref ?
        { display: '°F', help: 'Fahrenheit' } :
        { display: '°C', help: 'Celsius' };
    default:
      return mPref ?
        { display: 'Imperial', help: '' } :
        { display: 'Metric', help: '' };
  }
};

exports.round = round;
exports.isValid = isValid;
exports.getLastInArray = getLastInArray;
exports.divideAndRound = divideAndRound;

exports.secondsToTime = secondsToTime;
exports.kgToPounds = kgToPounds;
exports.kgToPoundsRound = kgToPoundsRound;
exports.metersToFeet = metersToFeet;
exports.metersToFeetRound = metersToFeetRound;
exports.metersToMiles = metersToMiles;
exports.metersToMilesRound = metersToMilesRound;
exports.metersToKm = metersToKm;
exports.metersToKmRound = metersToKmRound;
exports.mpsToKPH = mpsToKPH;
exports.mpsToKPHRound = mpsToKPHRound;
exports.mpsToMPH = mpsToMPH;
exports.mpsToMPHRound = mpsToKPHRound;

exports.difficultyIndex = difficultyIndex;
exports.percentFTPAcc = percentFTPAcc;
exports.percentFTPNAcc = percentFTPNAcc;
exports.calcTssScore = calcTssScore;
exports.calcTssScoreRound = calcTssScoreRound;

exports.statsConversions = statsConversions;
exports.mPrefLabel = mPrefLabel;
