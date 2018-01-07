var _require = require('./helpers'),
    divideAndRound = _require.divideAndRound,
    getLastInArray = _require.getLastInArray,
    isValid = _require.isValid,
    round = _require.round,
    secondsToTime = _require.secondsToTime;

var _require2 = require('./vars'),
    arrOfObj = _require2.arrOfObj;

describe('round number to X place', function () {
  test('1.5 - returns 2', function () {
    expect(round(1.5)).toEqual(2);
  });
  test('2.4 - returns 2', function () {
    expect(round(2.4)).toEqual(2);
  });
  test('2.5 - returns 3', function () {
    expect(round(2.5)).toEqual(3);
  });
  test('1.535, 2 - returns 1.54', function () {
    expect(round(1.535, 2)).toEqual(1.54);
  });
  test('1.525, 2 - returns 1.52', function () {
    expect(round(1.525, 2)).toEqual(1.53);
  });
});

describe('isValid', function () {
  test('strings: "a string", "s" - returns true', function () {
    expect(isValid('a string', 's')).toEqual(true);
  });
  test('strings: 100, "s" - returns false', function () {
    expect(isValid(100, 's')).toEqual(false);
  });
  test('strings: undefined, "s" - returns false', function () {
    expect(isValid(undefined, 's')).toEqual(false);
  });

  test('numbers: 100 - returns true', function () {
    expect(isValid(100)).toEqual(true);
  });
  test('numbers: 100, n - returns true', function () {
    expect(isValid(100, 'n')).toEqual(true);
  });
  test('numbers: -10 - returns true', function () {
    expect(isValid(-10)).toEqual(true);
  });
  test('numbers: 0.10 - returns true', function () {
    expect(isValid(0.10)).toEqual(true);
  });
  test('numbers: "100"(string) - returns false', function () {
    expect(isValid('100')).toEqual(false);
  });
  test('numbers: "a string" - returns false', function () {
    expect(isValid('a string')).toEqual(false);
  });
  test('numbers: undefined - returns false', function () {
    expect(isValid(undefined)).toEqual(false);
  });
});

describe('secondsToTime takes unix seconds and returns H:mm', function () {
  test('5847708 to 67 days 16:21', function () {
    expect(secondsToTime(5847708)).toEqual('67 days 16:21');
  });
  test('35005 to 9:43', function () {
    expect(secondsToTime(35005)).toEqual('9:43');
  });
});

describe('getLastInArray', function () {
  test('arrOfObj weight to 63.5', function () {
    expect(getLastInArray(arrOfObj, 'weight')).toEqual(63.5);
  });
  test('arrOfObj ftp to 255', function () {
    expect(getLastInArray(arrOfObj, 'ftp')).toEqual(255);
  });
});

describe('divideAndRound', function () {
  test('240, 190, 2 to ', function () {
    expect(divideAndRound(240, 190, 2)).toEqual(1.26);
  });
  test('240, 190, 4 to ', function () {
    expect(divideAndRound(240, 190, 4)).toEqual(1.2632);
  });
  test('190, 240, 2 to ', function () {
    expect(divideAndRound(190, 240, 2)).toEqual(0.79);
  });
  test('190, 240, 4 to ', function () {
    expect(divideAndRound(190, 240, 4)).toEqual(0.7917);
  });
  test('24035, 190, 2 to ', function () {
    expect(divideAndRound(240, 190, 1)).toEqual(1.3);
  });
  test('12345, 24 - no rounding arg', function () {
    expect(divideAndRound(12345, 24)).toEqual(514);
  });
  test('12345, 0', function () {
    expect(divideAndRound(12345, 0)).toEqual(0);
  });
  test('0, 25', function () {
    expect(divideAndRound(0, 25)).toEqual(0);
  });
});