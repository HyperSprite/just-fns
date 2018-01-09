// Use: jest test --watch
var justFns = require('./index');

var _require = require('./lib/vars'),
    adjustedElev500 = _require.adjustedElev500,
    arrA = _require.arrA,
    arrOfObj = _require.arrOfObj;

describe('round number to X place', function () {
  test('1.5 - returns 2', function () {
    expect(justFns.round(1.5)).toEqual(2);
  });
});

describe('isValid', function () {
  test('strings: "a string", "s" - returns true', function () {
    expect(justFns.isValid('a string', 's')).toEqual(true);
  });
});

describe('secondsToTime takes unix seconds and returns H:mm', function () {
  test('5847708 to 67 days 16:21', function () {
    expect(justFns.secondsToTime(5847708)).toEqual('67 days 16:21');
  });
});

describe('getLastInArray', function () {
  test('arrOfObj weight to 63.5', function () {
    expect(justFns.getLastInArray(arrOfObj, 'weight')).toEqual(63.5);
  });
});

describe('divideAndRound', function () {
  test('240, 190, 2 to ', function () {
    expect(justFns.divideAndRound(240, 190, 2)).toEqual(1.26);
  });
});

describe('hiConsAvg', function () {
  test('(arrA, 3) to ', function () {
    expect(justFns.hiConsAvg(arrA, 3)).toEqual(42);
  });
});

/**
* END helpers
*
* Start means-conv
*
*/

describe('kgToPounds number to number', function () {
  test('8kg returns 17.63696lbs', function () {
    expect(justFns.kgToPounds(8)).toEqual(17.63696);
  });
});

describe('kgToPoundsRound number to number at X place', function () {
  test('8kg, 3 returns 17.637lbs', function () {
    expect(justFns.kgToPoundsRound(8, 3)).toEqual(17.637);
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
});

describe('metersToMiles', function () {
  test('10000 to 6.2137121212121', function () {
    expect(justFns.metersToMiles(10000)).toEqual(6.2137121212121);
  });
});

describe('metersToMilesRound', function () {
  test('10000 to 6.21', function () {
    expect(justFns.metersToMilesRound(10000, 2)).toEqual(6.21);
  });
});

describe('metersToKm', function () {
  test('1000 to 1', function () {
    expect(justFns.metersToKm(1000)).toEqual(1);
  });
});

describe('metersToKmRound', function () {
  test('123456789 to 123456.79', function () {
    expect(justFns.metersToKmRound(123456789, 2)).toEqual(123456.79);
  });
});

/**
* END means-conv
*
* Start cycling
*
*/

describe('percentFTPAcc', function () {
  test('250 elv - (user elevation of 25) ', function () {
    expect(justFns.percentFTPAcc(adjustedElev500)).toEqual(99.3440390731329);
  });
});

describe('percentFTPNAcc', function () {
  test('250 elv - (user elevation of 25) ', function () {
    expect(justFns.percentFTPNAcc(adjustedElev500)).toEqual(98.87475177375516);
  });
});

describe('calcTssScore', function () {
  test('(arrOfObj[0].et, arrOfObj[0].waw arrOfObj[0].ftp) - (user elevation of 25) ', function () {
    expect(justFns.calcTssScore(arrOfObj[0].et, arrOfObj[0].waw, arrOfObj[0].ftp)).toEqual(arrOfObj[0].tss);
  });
});

describe('calcTssScoreRound', function () {
  test('(arrOfObj[2].et, arrOfObj[2].waw arrOfObj[2].ftp) - defaults to 0 places > 184', function () {
    expect(justFns.calcTssScoreRound(arrOfObj[2].et, arrOfObj[2].waw, arrOfObj[2].ftp)).toEqual(arrOfObj[2].tss);
  });
});

/**
* END cycling
*
* Start specail
*
*/

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
  test('tss, false, 431.52489, false', function () {
    expect(justFns.statsConversions('tss', false, 431.52489, false)).toEqual(432);
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