// Use: jest test --watch
const justFns = require('./index');

const {
  adjustedElev500,
  arrA,
  arrOfObj,
  userElv,
  targetElvA,
  targetElvB,
} = require('./lib/vars');

describe('round number to X place', () => {
  test('1.5 - returns 2', () => {
    expect(justFns.round(1.5)).toEqual(2);
  });
});

describe('isValid', () => {
  test('strings: "a string", "s" - returns true', () => {
    expect(justFns.isValid('a string', 's')).toEqual(true);
  });
});

describe('capAndSpace converts the first position in a string to a capital letter', () => {
  test('hello_world-again to Hello World Again', () => {
    expect(justFns.capAndSpace('hello_world-again')).toEqual('Hello World Again');
  });
});

describe('csvStringToArray takes a comma seperated string and returns array of strings', () => {
  test('"1, 2, 3, 4, 5" to ["1", "2", "3", "4", "5"]', () => {
    expect(justFns.csvStringToArray('patience, time, get it right')).toEqual(['patience', 'time', 'get it right']);
  });
});

describe('secondsToTime takes unix seconds and returns H:mm', () => {
  test('5847708 to 67 days 16:21', () => {
    expect(justFns.secondsToTime(5847708)).toEqual('67 days 16:21');
  });
});

describe('getLastInArray', () => {
  test('arrOfObj weight to 63.5', () => {
    expect(justFns.getLastInArray(arrOfObj, 'weight')).toEqual(63.5);
  });
});

describe('divideAndRound', () => {
  test('240, 190, 2 to ', () => {
    expect(justFns.divideAndRound(240, 190, 2)).toEqual(1.26);
  });
});

describe('hiConsAvg', () => {
  test('(arrA, 3) to ', () => {
    expect(justFns.hiConsAvg(arrA, 3)).toEqual(42);
  });
});

/**
* END helpers
*
* Start means-conv
*
*/

describe('kgToPounds number to number', () => {
  test('8kg returns 17.63696lbs', () => {
    expect(justFns.kgToPounds(8)).toEqual(17.63696);
  });
});


describe('metersToFeet', () => {
  test('10000 to 32808.4', () => {
    expect(justFns.metersToFeet(10000)).toEqual(32808.4);
  });
});

describe('metersToMiles', () => {
  test('10000 to 6.2137121212121', () => {
    expect(justFns.metersToMiles(10000)).toEqual(6.2137121212121);
  });
});

describe('metersToKm', () => {
  test('1000 to 1', () => {
    expect(justFns.metersToKm(1000)).toEqual(1);
  });
});

describe('kphToMPS', () => {
  test('65 to 18', () => {
    expect(justFns.kphToMPSRound(65)).toEqual(18);
  });
});

describe('mphToMPS', () => {
  test('50 to 22', () => {
    expect(justFns.mphToMPSRound(50)).toEqual(22);
  });
});

describe('metersToFeetRound', () => {
  test('10000 to 32808', () => {
    expect(justFns.metersToFeetRound(10000, 0)).toEqual(32808);
  });
});

describe('metersToMilesRound', () => {
  test('10000 to 6.21', () => {
    expect(justFns.metersToMilesRound(10000, 2)).toEqual(6.21);
  });
});

describe('kgToPoundsRound number to number at X place', () => {
  test('8kg, 3 returns 17.637lbs', () => {
    expect(justFns.kgToPoundsRound(8, 3)).toEqual(17.637);
  });
});

describe('metersToKmRound', () => {
  test('123456789 to 123456.79', () => {
    expect(justFns.metersToKmRound(123456789, 2)).toEqual(123456.79);
  });
});

/**
* END means-conv
*
* Start cycling
*
*/

describe('percentFTPAcc', () => {
  test('250 elv - (user elevation of 25) ', () => {
    expect(justFns.percentFTPAcc(adjustedElev500)).toEqual(99.3440390731329);
  });
});

describe('percentFTPNAcc', () => {
  test('250 elv - (user elevation of 25) ', () => {
    expect(justFns.percentFTPNAcc(adjustedElev500)).toEqual(98.87475177375516);
  });
});

describe('Combined: altitudeIndex and percentFTPAcc', () => {
  test('(targetElvA, userElv) - 99.34452477', () => {
    expect(justFns.percentFTPAcc(justFns.altitudeIndex(targetElvA, userElv))).toEqual(99.34452477);
  });
  test('(targetElvB, userElv) - 63.14546998894553', () => {
    expect(justFns.percentFTPNAcc(justFns.altitudeIndex(targetElvB, userElv))).toEqual(63.14546998894553);
  });
});

describe('calcTssScore', () => {
  test('(arrOfObj[0].et, arrOfObj[0].waw arrOfObj[0].ftp) - (user elevation of 25) ', () => {
    expect(justFns.calcTssScore(arrOfObj[0].et, arrOfObj[0].waw, arrOfObj[0].ftp)).toEqual(arrOfObj[0].tss);
  });
});

describe('calcTssScoreRound', () => {
  test('(arrOfObj[2].et, arrOfObj[2].waw arrOfObj[2].ftp) - defaults to 0 places > 184', () => {
    expect(justFns.calcTssScoreRound(arrOfObj[2].et, arrOfObj[2].waw, arrOfObj[2].ftp)).toEqual(arrOfObj[2].tss);
  });
  test('(arrOfObj[3].et, arrOfObj[3].waw, arrOfObj[3].ftp, 2) - set to 2 places > 494.27', () => {
    expect(justFns.calcTssScoreRound(arrOfObj[3].et, arrOfObj[3].waw, arrOfObj[3].ftp, 2)).toEqual(arrOfObj[3].tss);
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

describe('statsConversions', () => {
  test('time, false, 1512947840', () => {
    expect(justFns.statsConversions('time', false, 35005)).toEqual('9:43');
  });
  test('dst, false, 15129, false', () => {
    expect(justFns.statsConversions('dst', false, 15129, false)).toEqual(15.1);
  });
  test('dst, false, 15129, true', () => {
    expect(justFns.statsConversions('dst', false, 15129, true)).toEqual(9.4);
  });
  test('spd, false, 33.1, false', () => {
    expect(justFns.statsConversions('spd', false, 33.1, false)).toEqual(119.2);
  });
  test('spd, false, 33.1, true', () => {
    expect(justFns.statsConversions('spd', false, 33.1, true)).toEqual(74);
  });
  test('elev, false, 1512.9352, false', () => {
    expect(justFns.statsConversions('elev', false, 1512.9352, false)).toEqual(1513);
  });
  test('elev, false, 1512.9352, true', () => {
    expect(justFns.statsConversions('elev', false, 1512.9352, true)).toEqual(4964);
  });
  test('cal, false, 1512.9352, false', () => {
    expect(justFns.statsConversions('cal', false, 1512.9352, false)).toEqual(1513);
  });
  test('kj, false, 1512.9352, false', () => {
    expect(justFns.statsConversions('kj', false, 1512.9352, false)).toEqual(1513);
  });
  test('tss, false, 431.52489, false', () => {
    expect(justFns.statsConversions('tss', false, 431.52489, false)).toEqual(432);
  });
});

/**
* metric = 'speedS', 'speedL' 'dstS', 'dstL', 'temp' type: string
* mPref = true for SAE, false for Metric
* returns an object { display: , help: } : { display: , help: };
*/

describe('mPrefLabel', () => {
  test('speedS, false', () => {
    expect(JSON.stringify(justFns.mPrefLabel('speedS', false)))
      .toEqual(JSON.stringify({ display: 'm/s', help: 'Meters / Second' }));
  });
  test('speedS, true', () => {
    expect(JSON.stringify(justFns.mPrefLabel('speedS', true)))
      .toEqual(JSON.stringify({ display: 'fps', help: 'Feet per Second' }));
  });
  test('speedL, false', () => {
    expect(JSON.stringify(justFns.mPrefLabel('speedL', false)))
      .toEqual(JSON.stringify({ display: 'km/h', help: 'Kilometers / Hour' }));
  });
  test('speedL, true', () => {
    expect(JSON.stringify(justFns.mPrefLabel('speedL', true)))
      .toEqual(JSON.stringify({ display: 'mph', help: 'Miles per Hour' }));
  });
  test('dstS, false', () => {
    expect(JSON.stringify(justFns.mPrefLabel('dstS', false)))
      .toEqual(JSON.stringify({ display: 'm', help: 'Meters' }));
  });
  test('dstS, true', () => {
    expect(JSON.stringify(justFns.mPrefLabel('dstS', true)))
      .toEqual(JSON.stringify({ display: 'ft', help: 'Feet' }));
  });
  test('dstL, false', () => {
    expect(JSON.stringify(justFns.mPrefLabel('dstL', false)))
      .toEqual(JSON.stringify({ display: 'km', help: 'Kilometers' }));
  });
  test('dstL, true', () => {
    expect(JSON.stringify(justFns.mPrefLabel('dstL', true)))
      .toEqual(JSON.stringify({ display: 'mi', help: 'Miles' }));
  });
  test('temp, false', () => {
    expect(JSON.stringify(justFns.mPrefLabel('temp', false)))
      .toEqual(JSON.stringify({ display: '°C', help: 'Celsius' }));
  });
  test('temp, true', () => {
    expect(JSON.stringify(justFns.mPrefLabel('temp', true)))
      .toEqual(JSON.stringify({ display: '°F', help: 'Fahrenheit' }));
  });
  test('null, false', () => {
    expect(JSON.stringify(justFns.mPrefLabel(null, false)))
      .toEqual(JSON.stringify({ display: 'Metric', help: '' }));
  });
  test('null, true', () => {
    expect(JSON.stringify(justFns.mPrefLabel(null, true)))
      .toEqual(JSON.stringify({ display: 'Imperial', help: '' }));
  });
});
