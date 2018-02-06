const {
  capAndSpace,
  csvStringToArray,
  divideAndRound,
  getLastInArray,
  hiConsAvg,
  isValid,
  round,
  secondsToTime,
} = require('./helpers');

const {
  arrA,
  arrB,
  arrOfObj,
} = require('./vars');

describe('capAndSpace converts the first position in a string to a capital letter', () => {
  test('hello-world to Hello World', () => {
    expect(capAndSpace('hello-world')).toEqual('Hello World');
  });
  test('123_hello_world to 123 Hello World', () => {
    expect(capAndSpace('123_hello_world')).toEqual('123 Hello World');
  });
  test('35005 as Number returns null', () => {
    expect(capAndSpace(35005)).toEqual(null);
  });
  test('"35005"', () => {
    expect(capAndSpace('35005')).toEqual('35005');
  });
});

describe('csvStringToArray takes a comma seperated string and returns array of strings', () => {
  test('"1, 2, 3, 4, 5" to ["1", "2", "3", "4", "5"]', () => {
    expect(csvStringToArray('1, 2, 3, 4, 5')).toEqual(['1', '2', '3', '4', '5']);
  });
  test('"aString " to return "aString"', () => {
    expect(csvStringToArray('aString ')).toEqual(['aString']);
  });
  test('35005 as Number returns null', () => {
    expect(csvStringToArray(35005)).toEqual(null);
  });
});

describe('round number to X place', () => {
  test('1.5 - returns 2', () => {
    expect(round(1.5)).toEqual(2);
  });
  test('2.4 - returns 2', () => {
    expect(round(2.4)).toEqual(2);
  });
  test('2.5 - returns 3', () => {
    expect(round(2.5)).toEqual(3);
  });
  test('1.535, 2 - returns 1.54', () => {
    expect(round(1.535, 2)).toEqual(1.54);
  });
  test('1.525, 2 - returns 1.52', () => {
    expect(round(1.525, 2)).toEqual(1.53);
  });
});

describe('isValid', () => {
  test('strings: "a string", "s" - returns true', () => {
    expect(isValid('a string', 's')).toEqual(true);
  });
  test('strings: 100, "s" - returns false', () => {
    expect(isValid(100, 's')).toEqual(false);
  });
  test('strings: undefined, "s" - returns false', () => {
    expect(isValid(undefined, 's')).toEqual(false);
  });

  test('numbers: 100 - returns true', () => {
    expect(isValid(100)).toEqual(true);
  });
  test('numbers: 100, n - returns true', () => {
    expect(isValid(100, 'n')).toEqual(true);
  });
  test('numbers: -10 - returns true', () => {
    expect(isValid(-10)).toEqual(true);
  });
  test('numbers: 0.10 - returns true', () => {
    expect(isValid(0.10)).toEqual(true);
  });
  test('numbers: "100"(string) - returns false', () => {
    expect(isValid('100')).toEqual(false);
  });
  test('numbers: "a string" - returns false', () => {
    expect(isValid('a string')).toEqual(false);
  });
  test('numbers: undefined - returns false', () => {
    expect(isValid(undefined)).toEqual(false);
  });
});

describe('secondsToTime takes unix seconds and returns H:mm', () => {
  test('5847708 to 67 days 16:21', () => {
    expect(secondsToTime(5847708)).toEqual('67 days 16:21');
  });
  test('35005 to 9:43', () => {
    expect(secondsToTime(35005)).toEqual('9:43');
  });
  test('43200 to 12:00', () => {
    expect(secondsToTime(43200)).toEqual('12:00');
  });
  test('172800 to 12:00', () => {
    expect(secondsToTime(172800)).toEqual('2 days 0:00');
  });
  test('172860 to 12:01', () => {
    expect(secondsToTime(172860)).toEqual('2 days 0:01');
  });
});

describe('getLastInArray', () => {
  test('arrOfObj "weight" to 63.5', () => {
    expect(getLastInArray(arrOfObj, 'weight')).toEqual(63.5);
  });
  test('arrOfObj "ftp" to 255', () => {
    expect(getLastInArray(arrOfObj, 'ftp')).toEqual(255);
  });
  test('arrOfObj null to null', () => {
    expect(getLastInArray(arrOfObj, null)).toEqual(null);
  });
  test('arrOfObj to null', () => {
    expect(getLastInArray(arrOfObj)).toEqual(null);
  });
  test('arrOfObj "time" to null', () => {
    expect(getLastInArray(arrOfObj, 'time')).toEqual(null);
  });
});

describe('divideAndRound', () => {
  test('240, 190, 2 to ', () => {
    expect(divideAndRound(240, 190, 2)).toEqual(1.26);
  });
  test('240, 190, 4 to ', () => {
    expect(divideAndRound(240, 190, 4)).toEqual(1.2632);
  });
  test('190, 240, 2 to ', () => {
    expect(divideAndRound(190, 240, 2)).toEqual(0.79);
  });
  test('190, 240, 4 to ', () => {
    expect(divideAndRound(190, 240, 4)).toEqual(0.7917);
  });
  test('24035, 190, 2 to ', () => {
    expect(divideAndRound(240, 190, 1)).toEqual(1.3);
  });
  test('12345, 24 - no rounding arg', () => {
    expect(divideAndRound(12345, 24)).toEqual(514);
  });
  test('12345, 0', () => {
    expect(divideAndRound(12345, 0)).toEqual(0);
  });
  test('0, 25', () => {
    expect(divideAndRound(0, 25)).toEqual(0);
  });
});


describe('hiConsAvg', () => {
  test('(arrA, 3) to 42', () => {
    expect(hiConsAvg(arrA, 3)).toEqual(42);
  });
  test('(arrA, 4) to 32', () => {
    expect(hiConsAvg(arrA, 5)).toEqual(32);
  });
  test('(arrB, 3) to 47', () => {
    expect(hiConsAvg(arrB, 3)).toEqual(47);
  });
  test('(arrB, 4) to 46.25', () => {
    expect(hiConsAvg(arrB, 4)).toEqual(46.25);
  });
  test('hiConsAvg([2.55, 3, 3, 2.3, 2, 4], 3) to 2.85', () => {
    expect(hiConsAvg([2.55, 3, 3, 2.3, 2, 4], 3)).toEqual(2.85);
  });
  test('test null, null input', () => {
    expect(hiConsAvg(null, null)).toBe(null);
  });
  test('test null, 5 input', () => {
    expect(hiConsAvg(null, 5)).toBe(null);
  });
  test('test shorter array than elmCount', () => {
    expect(hiConsAvg(arrA, 17)).toBe(null);
  });
  test('test elmCount is isInteger', () => {
    expect(hiConsAvg(arrA, 10.5)).toBe(null);
  });
  test('test elmCount is isInteger', () => {
    expect(hiConsAvg(arrA, 'a')).toBe(null);
  });
  test('test string in array', () => {
    expect(hiConsAvg(['a', 'b', 3, 21, 2, 4], 3)).toEqual(9);
  });
  test('test all strings in array', () => {
    expect(hiConsAvg(['a', 'b', 'c', 'd'], 3)).toEqual(0);
  });
});
