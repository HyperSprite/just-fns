// Use: jest test --watch
var justFns = require('./index');

var adjustedElev500 = 0.500 - 24.55533409118652 * 0.01;
var adjustedElev6000 = 6.000 - 24.55533409118652 * 0.01;
var arrOfObj = [{ weight: 63, ftp: 250, et: 7200, waw: 240, tss: 184.32 }, // eslint-disable-line object-curly-newline
{ weight: 63.1, ftp: 251, et: 39719, waw: 168, tss: 494.2730432850272 }, // eslint-disable-line object-curly-newline
{ weight: 63.2, ftp: 252, et: 35547, waw: 156, tss: 378 }, // eslint-disable-line object-curly-newline
{ weight: 63.3, ftp: 253, et: 29377, waw: 205, tss: 535.76 }, // eslint-disable-line object-curly-newline
{ weight: 63.4, ftp: 254, et: 11685, waw: 207, tss: null }, // eslint-disable-line object-curly-newline
{ weight: 63.5, ftp: 255, et: 3521, waw: 227, tss: null }];

describe('round number to X place', function () {
  test('1.5 - returns 2', function () {
    expect(justFns.round(1.5)).toEqual(2);
  });
  test('2.4 - returns 2', function () {
    expect(justFns.round(2.4)).toEqual(2);
  });
  test('2.5 - returns 3', function () {
    expect(justFns.round(2.5)).toEqual(3);
  });
  test('1.535, 2 - returns 1.54', function () {
    expect(justFns.round(1.535, 2)).toEqual(1.54);
  });
  test('1.525, 2 - returns 1.52', function () {
    expect(justFns.round(1.525, 2)).toEqual(1.53);
  });
});

describe('isValid', function () {
  test('strings: "a string", "s" - returns true', function () {
    expect(justFns.isValid('a string', 's')).toEqual(true);
  });
  test('strings: 100, "s" - returns false', function () {
    expect(justFns.isValid(100, 's')).toEqual(false);
  });
  test('strings: undefined, "s" - returns false', function () {
    expect(justFns.isValid(undefined, 's')).toEqual(false);
  });

  test('numbers: 100 - returns true', function () {
    expect(justFns.isValid(100)).toEqual(true);
  });
  test('numbers: 100, n - returns true', function () {
    expect(justFns.isValid(100, 'n')).toEqual(true);
  });
  test('numbers: -10 - returns true', function () {
    expect(justFns.isValid(-10)).toEqual(true);
  });
  test('numbers: 0.10 - returns true', function () {
    expect(justFns.isValid(0.10)).toEqual(true);
  });
  test('numbers: "100"(string) - returns false', function () {
    expect(justFns.isValid('100')).toEqual(false);
  });
  test('numbers: "a string" - returns false', function () {
    expect(justFns.isValid('a string')).toEqual(false);
  });
  test('numbers: undefined - returns false', function () {
    expect(justFns.isValid(undefined)).toEqual(false);
  });
});

describe('secondsToTime takes unix seconds and returns H:mm', function () {
  test('5847708 to 67 days 16:21', function () {
    expect(justFns.secondsToTime(5847708)).toEqual('67 days 16:21');
  });
  test('35005 to 9:43', function () {
    expect(justFns.secondsToTime(35005)).toEqual('9:43');
  });
});

describe('getLastInArray', function () {
  test('arrOfObj weight to 63.5', function () {
    expect(justFns.getLastInArray(arrOfObj, 'weight')).toEqual(63.5);
  });
  test('arrOfObj ftp to 255', function () {
    expect(justFns.getLastInArray(arrOfObj, 'ftp')).toEqual(255);
  });
});

describe('divideAndRound', function () {
  test('240, 190, 2 to ', function () {
    expect(justFns.divideAndRound(240, 190, 2)).toEqual(1.26);
  });
  test('240, 190, 4 to ', function () {
    expect(justFns.divideAndRound(240, 190, 4)).toEqual(1.2632);
  });
  test('190, 240, 2 to ', function () {
    expect(justFns.divideAndRound(190, 240, 2)).toEqual(0.79);
  });
  test('190, 240, 4 to ', function () {
    expect(justFns.divideAndRound(190, 240, 4)).toEqual(0.7917);
  });
  test('24035, 190, 2 to ', function () {
    expect(justFns.divideAndRound(240, 190, 1)).toEqual(1.3);
  });
  test('12345, 24 - no rounding arg', function () {
    expect(justFns.divideAndRound(12345, 24)).toEqual(514);
  });
  test('12345, 0', function () {
    expect(justFns.divideAndRound(12345, 0)).toEqual(0);
  });
  test('0, 25', function () {
    expect(justFns.divideAndRound(0, 25)).toEqual(0);
  });
});

describe('kgToPounds number to number', function () {
  test('8kg returns 17.63696lbs', function () {
    expect(justFns.kgToPounds(8)).toEqual(17.63696);
  });
  test('321.6kg returns 709.005792lbs', function () {
    expect(justFns.kgToPounds(321.6)).toEqual(709.005792);
  });
});

describe('kgToPoundsRound number to number at X place', function () {
  test('8kg, 3 returns 17.637lbs', function () {
    expect(justFns.kgToPoundsRound(8, 3)).toEqual(17.637);
  });
  test('321.6kg returns 709.005792lbs', function () {
    expect(justFns.kgToPoundsRound(321.1, 2)).toEqual(707.9);
  });
});

describe('metersToFeet', function () {
  test('10000 to 32808.4', function () {
    expect(justFns.metersToFeet(10000)).toEqual(32808.4);
  });
});

describe('metersToFeetRound', function () {
  test('10000 to 32808', function () {
    expect(justFns.metersToFeetRound(10000, 0)).toEqual(32808);
  });
  test('10040 to 32939.63', function () {
    expect(justFns.metersToFeetRound(10040, 2)).toEqual(32939.63);
  });
});

describe('metersToMiles', function () {
  test('10000 to 6.2137121212121', function () {
    expect(justFns.metersToMiles(10000)).toEqual(6.2137121212121);
  });
  test('357274 to 221.9997784393932', function () {
    expect(justFns.metersToMiles(357274)).toEqual(221.9997784393932);
  });
});

describe('metersToMilesRound', function () {
  test('10000 to 6.21', function () {
    expect(justFns.metersToMilesRound(10000, 2)).toEqual(6.21);
  });
  test('357274 to 222', function () {
    expect(justFns.metersToMilesRound(357274, 0)).toEqual(222);
  });
});

describe('metersToKm', function () {
  test('1000 to 1', function () {
    expect(justFns.metersToKm(1000)).toEqual(1);
  });
  test('123450 to 12.3450', function () {
    expect(justFns.metersToKm(123450)).toEqual(123.45);
  });
});

describe('metersToKmRound', function () {
  test('123456789 to 123456.79', function () {
    expect(justFns.metersToKmRound(123456789, 2)).toEqual(123456.79);
  });
  test('123456789 to 123457', function () {
    expect(justFns.metersToKmRound(123456789, 0)).toEqual(123457);
  });
});

describe('percentFTPAcc', function () {
  test('250 elv - (user elevation of 25) ', function () {
    expect(justFns.percentFTPAcc(adjustedElev500)).toEqual(99.3440390731329);
  });
  test('6000 elv - (user elevation of 25) ', function () {
    expect(justFns.percentFTPAcc(adjustedElev6000)).toEqual(51.87925623316708);
  });
});

describe('percentFTPNAcc', function () {
  test('250 elv - (user elevation of 25) ', function () {
    expect(justFns.percentFTPNAcc(adjustedElev500)).toEqual(98.87475177375516);
  });
  test('6000 elv - (user elevation of 25) ', function () {
    expect(justFns.percentFTPNAcc(adjustedElev6000)).toEqual(63.14491042539609);
  });
});

describe('calcTssScore', function () {
  test('(arrOfObj[0].et, arrOfObj[0].waw arrOfObj[0].ftp) - (user elevation of 25) ', function () {
    expect(justFns.calcTssScore(arrOfObj[0].et, arrOfObj[0].waw, arrOfObj[0].ftp)).toEqual(arrOfObj[0].tss);
  });
  test('(justFns.calcTssScore(arrOfObj[1].et, arrOfObj[1].waw, arrOfObj[1].ftp) (user elevation of 25) ', function () {
    expect(justFns.calcTssScore(arrOfObj[1].et, arrOfObj[1].waw, arrOfObj[1].ftp)).toEqual(arrOfObj[1].tss);
  });
});

describe('calcTssScoreRound', function () {
  test('(arrOfObj[2].et, arrOfObj[2].waw arrOfObj[2].ftp) - defaults to 0 places > 184', function () {
    expect(justFns.calcTssScoreRound(arrOfObj[2].et, arrOfObj[2].waw, arrOfObj[2].ftp)).toEqual(arrOfObj[2].tss);
  });
  test('(arrOfObj[3].et, arrOfObj[3].waw, arrOfObj[3].ftp, 2) - set to 2 places > 494.27', function () {
    expect(justFns.calcTssScoreRound(arrOfObj[3].et, arrOfObj[3].waw, arrOfObj[3].ftp, 2)).toEqual(arrOfObj[3].tss);
  });
});

/*
* metric = 'time', 'dst', 'elev', 'cal', 'kj' type: string
* yAxis = bool - for recharts
* data = non-formatted number, like time in seconds, dist in meters.
* mPref = true for Imperial, false for Metric
*/

describe('statsConversions', function () {
  test('time, false, 1512947840', function () {
    expect(justFns.statsConversions('time', false, 35005)).toEqual('9:43');
  });
  test('dst, false, 15129, false', function () {
    expect(justFns.statsConversions('dst', false, 15129, false)).toEqual(15.1);
  });
  test('dst, false, 15129, true', function () {
    expect(justFns.statsConversions('dst', false, 15129, true)).toEqual(9.4);
  });
  test('spd, false, 33.1, false', function () {
    expect(justFns.statsConversions('spd', false, 33.1, false)).toEqual(119.2);
  });
  test('spd, false, 33.1, true', function () {
    expect(justFns.statsConversions('spd', false, 33.1, true)).toEqual(74);
  });
  test('elev, false, 1512.9352, false', function () {
    expect(justFns.statsConversions('elev', false, 1512.9352, false)).toEqual(1513);
  });
  test('elev, false, 1512.9352, true', function () {
    expect(justFns.statsConversions('elev', false, 1512.9352, true)).toEqual(4964);
  });
  test('cal, false, 1512.9352, false', function () {
    expect(justFns.statsConversions('cal', false, 1512.9352, false)).toEqual(1513);
  });
  test('kj, false, 1512.9352, false', function () {
    expect(justFns.statsConversions('kj', false, 1512.9352, false)).toEqual(1513);
  });
});

/**
* metric = 'speedS', 'speedL' 'dstS', 'dstL', 'temp' type: string
* mPref = true for SAE, false for Metric
* returns an object { display: , help: } : { display: , help: };
*/

describe('mPrefLabel', function () {
  test('speedS, false', function () {
    expect(JSON.stringify(justFns.mPrefLabel('speedS', false))).toEqual(JSON.stringify({ display: 'm/s', help: 'Meters / Second' }));
  });
  test('speedS, true', function () {
    expect(JSON.stringify(justFns.mPrefLabel('speedS', true))).toEqual(JSON.stringify({ display: 'fps', help: 'Feet per Second' }));
  });
  test('speedL, false', function () {
    expect(JSON.stringify(justFns.mPrefLabel('speedL', false))).toEqual(JSON.stringify({ display: 'km/h', help: 'Kilometers / Hour' }));
  });
  test('speedL, true', function () {
    expect(JSON.stringify(justFns.mPrefLabel('speedL', true))).toEqual(JSON.stringify({ display: 'mph', help: 'Miles per Hour' }));
  });
  test('dstS, false', function () {
    expect(JSON.stringify(justFns.mPrefLabel('dstS', false))).toEqual(JSON.stringify({ display: 'm', help: 'Meters' }));
  });
  test('dstS, true', function () {
    expect(JSON.stringify(justFns.mPrefLabel('dstS', true))).toEqual(JSON.stringify({ display: 'ft', help: 'Feet' }));
  });
  test('dstL, false', function () {
    expect(JSON.stringify(justFns.mPrefLabel('dstL', false))).toEqual(JSON.stringify({ display: 'km', help: 'Kilometers' }));
  });
  test('dstL, true', function () {
    expect(JSON.stringify(justFns.mPrefLabel('dstL', true))).toEqual(JSON.stringify({ display: 'mi', help: 'Miles' }));
  });
  test('temp, false', function () {
    expect(JSON.stringify(justFns.mPrefLabel('temp', false))).toEqual(JSON.stringify({ display: '°C', help: 'Celsius' }));
  });
  test('temp, true', function () {
    expect(JSON.stringify(justFns.mPrefLabel('temp', true))).toEqual(JSON.stringify({ display: '°F', help: 'Fahrenheit' }));
  });
  test('null, false', function () {
    expect(JSON.stringify(justFns.mPrefLabel(null, false))).toEqual(JSON.stringify({ display: 'Metric', help: '' }));
  });
  test('null, true', function () {
    expect(JSON.stringify(justFns.mPrefLabel(null, true))).toEqual(JSON.stringify({ display: 'Imperial', help: '' }));
  });
});