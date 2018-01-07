var _require = require('./meas-conv'),
    kgToPounds = _require.kgToPounds,
    metersToFeet = _require.metersToFeet,
    metersToMiles = _require.metersToMiles,
    metersToKm = _require.metersToKm,
    mpsToKPH = _require.mpsToKPH,
    mpsToMPH = _require.mpsToMPH,
    kgToPoundsRound = _require.kgToPoundsRound,
    metersToFeetRound = _require.metersToFeetRound,
    metersToMilesRound = _require.metersToMilesRound,
    metersToKmRound = _require.metersToKmRound,
    mpsToKPHRound = _require.mpsToKPHRound,
    mpsToMPHRound = _require.mpsToMPHRound;

describe('kgToPounds number to number', function () {
  test('8kg returns 17.63696lbs', function () {
    expect(kgToPounds(8)).toEqual(17.63696);
  });
  test('321.6kg returns 709.005792lbs', function () {
    expect(kgToPounds(321.6)).toEqual(709.005792);
  });
});

describe('kgToPoundsRound number to number at X place', function () {
  test('8kg, 3 returns 17.637lbs', function () {
    expect(kgToPoundsRound(8, 3)).toEqual(17.637);
  });
  test('321.6kg returns 709.005792lbs', function () {
    expect(kgToPoundsRound(321.1, 2)).toEqual(707.9);
  });
});

describe('metersToFeet', function () {
  test('10000 to 32808.4', function () {
    expect(metersToFeet(10000)).toEqual(32808.4);
  });
});

describe('metersToFeetRound', function () {
  test('10000 to 32808', function () {
    expect(metersToFeetRound(10000, 0)).toEqual(32808);
  });
  test('10040 to 32939.63', function () {
    expect(metersToFeetRound(10040, 2)).toEqual(32939.63);
  });
});

describe('metersToMiles', function () {
  test('10000 to 6.2137121212121', function () {
    expect(metersToMiles(10000)).toEqual(6.2137121212121);
  });
  test('357274 to 221.9997784393932', function () {
    expect(metersToMiles(357274)).toEqual(221.9997784393932);
  });
});

describe('metersToMilesRound', function () {
  test('10000 to 6.21', function () {
    expect(metersToMilesRound(10000, 2)).toEqual(6.21);
  });
  test('357274 to 222', function () {
    expect(metersToMilesRound(357274, 0)).toEqual(222);
  });
});

describe('metersToKm', function () {
  test('1000 to 1', function () {
    expect(metersToKm(1000)).toEqual(1);
  });
  test('123450 to 12.3450', function () {
    expect(metersToKm(123450)).toEqual(123.45);
  });
});

describe('metersToKmRound', function () {
  test('123456789 to 123456.79', function () {
    expect(metersToKmRound(123456789, 2)).toEqual(123456.79);
  });
  test('123456789 to 123457', function () {
    expect(metersToKmRound(123456789, 0)).toEqual(123457);
  });
});

describe('mpsToKPH', function () {
  test('50 to 180', function () {
    expect(mpsToKPH(50)).toEqual(180);
  });
  test('16 to 57.6', function () {
    expect(mpsToKPH(16)).toEqual(57.6);
  });
});

describe('mpsToKPHRound', function () {
  test('55.6 to 200.2', function () {
    expect(mpsToKPHRound(55.6, 1)).toEqual(200.2);
  });
  test('16 to 58', function () {
    expect(mpsToKPHRound(16, 0)).toEqual(58);
  });
});

describe('mpsToMPH', function () {
  test('50 to 111.845', function () {
    expect(mpsToMPH(50)).toEqual(111.845);
  });
  test('16 to 35.7904', function () {
    expect(mpsToMPH(16)).toEqual(35.7904);
  });
});

describe('mpsToMPHRound', function () {
  test('55.6 to 200.2', function () {
    expect(mpsToMPHRound(55.6, 1)).toEqual(124.4);
  });
  test('16 to 58', function () {
    expect(mpsToMPHRound(16)).toEqual(36);
  });
});