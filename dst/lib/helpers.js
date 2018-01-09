/**
* General use functions
*/

var round = function round(val) {
  var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Number(Math.round(val + ('e' + place)) + ('e-' + place));
}; // eslint-disable-line

var isValid = function isValid(val, type) {
  switch (type) {
    case 's':
      return typeof val === 'string';
    default:
      return Number.isFinite(val);
  }
};

var secondsToTime = function secondsToTime(sec) {
  var nDays = Math.floor(sec / 86400);
  var nHours = Math.floor(sec % 86400 / 3600);
  var nMinutes = Math.floor(sec % 86400 % 3600 / 60);
  // const nSeconds = ((sec % 86400) % 3600) % 60;
  return nDays ? nDays + ' days ' + nHours + ':' + nMinutes : nHours + ':' + nMinutes;
};

var divideAndRound = function divideAndRound(divideThis, byThis, p) {
  if (!isValid(divideThis) || !isValid(byThis || !byThis)) {
    return 0;
  }
  return round(divideThis * 1 / (byThis * 1), p);
};

var getLastInArray = function getLastInArray(arr, arrType) {
  var item = void 0;
  if (arr && arr.length > 0 && arr[arr.length - 1][arrType] != null) {
    item = arr[arr.length - 1][arrType];
  }
  return item;
};

/**
* Highest Consecutive Average per given elements
*/
var hiConsAvg = function hiConsAvg(arr, elmCount) {
  var hiSoFar = 0;
  for (var i = 0; i < arr.length - elmCount + 1; i++) {
    // eslint-disable-line
    var hiTest = arr.slice(i, i + elmCount).reduce(function (acc, elm) {
      return acc += elm;
    }, 0) / elmCount; // eslint-disable-line
    hiSoFar = hiSoFar < hiTest ? hiTest : hiSoFar;
  }
  return hiSoFar;
};

module.exports = {
  divideAndRound: divideAndRound,
  getLastInArray: getLastInArray,
  hiConsAvg: hiConsAvg,
  isValid: isValid,
  round: round,
  secondsToTime: secondsToTime
};