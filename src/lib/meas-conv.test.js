const {
  kgToPounds,
  metersToFeet,
  metersToMiles,
  metersToKm,
  mpsToKPH,
  mpsToMPH,
  kgToPoundsRound,
  metersToFeetRound,
  metersToMilesRound,
  metersToKmRound,
  mpsToKPHRound,
  mpsToMPHRound,
} = require('./meas-conv');


describe('kgToPounds number to number', () => {
  test('8kg returns 17.63696lbs', () => {
    expect(kgToPounds(8)).toEqual(17.63696);
  });
  test('321.6kg returns 709.005792lbs', () => {
    expect(kgToPounds(321.6)).toEqual(709.005792);
  });
});

describe('kgToPoundsRound number to number at X place', () => {
  test('8kg, 3 returns 17.637lbs', () => {
    expect(kgToPoundsRound(8, 3)).toEqual(17.637);
  });
  test('321.6kg returns 709.005792lbs', () => {
    expect(kgToPoundsRound(321.1, 2)).toEqual(707.9);
  });
});

describe('metersToFeet', () => {
  test('10000 to 32808.4', () => {
    expect(metersToFeet(10000)).toEqual(32808.4);
  });
});

describe('metersToFeetRound', () => {
  test('10000 to 32808', () => {
    expect(metersToFeetRound(10000, 0)).toEqual(32808);
  });
  test('10040 to 32939.63', () => {
    expect(metersToFeetRound(10040, 2)).toEqual(32939.63);
  });
});

describe('metersToMiles', () => {
  test('10000 to 6.2137121212121', () => {
    expect(metersToMiles(10000)).toEqual(6.2137121212121);
  });
  test('357274 to 221.9997784393932', () => {
    expect(metersToMiles(357274)).toEqual(221.9997784393932);
  });
});

describe('metersToMilesRound', () => {
  test('10000 to 6.21', () => {
    expect(metersToMilesRound(10000, 2)).toEqual(6.21);
  });
  test('357274 to 222', () => {
    expect(metersToMilesRound(357274, 0)).toEqual(222);
  });
});

describe('metersToKm', () => {
  test('1000 to 1', () => {
    expect(metersToKm(1000)).toEqual(1);
  });
  test('123450 to 12.3450', () => {
    expect(metersToKm(123450)).toEqual(123.45);
  });
});

describe('metersToKmRound', () => {
  test('123456789 to 123456.79', () => {
    expect(metersToKmRound(123456789, 2)).toEqual(123456.79);
  });
  test('123456789 to 123457', () => {
    expect(metersToKmRound(123456789, 0)).toEqual(123457);
  });
});

describe('mpsToKPH', () => {
  test('50 to 180', () => {
    expect(mpsToKPH(50)).toEqual(180);
  });
  test('16 to 57.6', () => {
    expect(mpsToKPH(16)).toEqual(57.6);
  });
});

describe('mpsToKPHRound', () => {
  test('55.6 to 200.2', () => {
    expect(mpsToKPHRound(55.6, 1)).toEqual(200.2);
  });
  test('16 to 58', () => {
    expect(mpsToKPHRound(16, 0)).toEqual(58);
  });
});

describe('mpsToMPH', () => {
  test('50 to 111.845', () => {
    expect(mpsToMPH(50)).toEqual(111.845);
  });
  test('16 to 35.7904', () => {
    expect(mpsToMPH(16)).toEqual(35.7904);
  });
});

describe('mpsToMPHRound', () => {
  test('55.6 to 200.2', () => {
    expect(mpsToMPHRound(55.6, 1)).toEqual(124.4);
  });
  test('16 to 58', () => {
    expect(mpsToMPHRound(16)).toEqual(36);
  });
});
