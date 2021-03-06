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

const capAndSpace = (str) => {
  if (!isValid(str, 's')) {
    return null;
  }
  return str
    .replace(/[_-]/g, ' ')
    .replace(/[a-z]/, f => f.toUpperCase())
    .replace(/\s[a-z]/g, f => f.toUpperCase());
};

const csvStringToArray = (str) => {
  if (!isValid(str, 's')) {
    return null;
  }
  if (str.indexOf(',') === -1) {
    return [str.trim()];
  }
  const tmpStr = str.replace(/,\s*/g, ',');
  return tmpStr.split(',');
};

const divideAndRound = (divideThis, byThis, p) => {
  if (!isValid(divideThis) || !isValid(byThis || !byThis)) {
    return 0;
  }
  return round(((divideThis * 1) / (byThis * 1)), p);
};

const getLastInArray = (arr, arrType) => {
  let item = null;
  if (arr && arr.length > 0 && arr[arr.length - 1][arrType] != null) {
    item = arr[arr.length - 1][arrType];
  }
  return item;
};

/**
* Highest Consecutive Average per given elements
*/
const hiConsAvg = (arr, elmCount) => {
  if (!arr || !arr.length || arr.length < elmCount || !Number.isInteger(elmCount)) {
    return null;
  }
  let hiSoFar = 0;
  for (let i = 0; i < arr.length - elmCount + 1; i++) { // eslint-disable-line
    const hiTest = arr.slice(i, i + elmCount).reduce((acc, elm) => acc += elm, 0) / elmCount; // eslint-disable-line
    hiSoFar = (hiSoFar < hiTest) ? hiTest : hiSoFar;
  }
  return hiSoFar;
};


const secondsToTime = (sec) => {
  const nDays = Math.floor(sec / 86400);
  const nHours = Math.floor((sec % 86400) / 3600);
  const nMinutes = (`0${Math.floor(((sec % 86400) % 3600) / 60)}`).slice(-2);
  return nDays ? `${nDays} days ${nHours}:${nMinutes}` : `${nHours}:${nMinutes}`;
};

module.exports = {
  capAndSpace,
  csvStringToArray,
  divideAndRound,
  getLastInArray,
  hiConsAvg,
  isValid,
  round,
  secondsToTime,
};
