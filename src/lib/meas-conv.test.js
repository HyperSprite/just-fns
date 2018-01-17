const {
  kgToPounds,
  poundsToKg,
  metersToFeet,
  ftToMeters,
  metersToMiles,
  milesToMeters,
  metersToKm,
  kmToMeters,
  mpsToKPH,
  kphToMPS,
  mpsToMPH,
  mphToMPS,
} = require('./meas-conv');


describe('kgToPounds number to number', () => {
  test('8kg returns 17.63696lbs', () => {
    expect(kgToPounds(8)).toEqual(17.63696);
  });
  test('321.6kg returns 709.005792lbs', () => {
    expect(kgToPounds(321.6)).toEqual(709.005792);
  });
});

describe('poundsToKg number to number', () => {
  test('157.4lbs returns 71.3953808kg', () => {
    expect(poundsToKg(157.4)).toEqual(71.3953808);
  });
  test('245lbs returns 111.13004kg', () => {
    expect(poundsToKg(245)).toEqual(111.13004);
  });
});

describe('metersToFeet', () => {
  test('10000 to 32808.4', () => {
    expect(metersToFeet(10000)).toEqual(32808.4);
  });
});

describe('ftToMeters', () => {
  test('32808 to 9999.8784', () => {
    expect(ftToMeters(32808)).toEqual(9999.8784);
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

describe('milesToMeters', () => {
  test('100  to 160934', () => {
    expect(milesToMeters(100)).toEqual(160934);
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

describe('kmToMeters', () => {
  test('1 to 1000', () => {
    expect(kmToMeters(1)).toEqual(1000);
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

describe('kphToMPS', () => {
  test('65 to 18.05555557', () => {
    expect(kphToMPS(65)).toEqual(18.05555557);
  });
  test('100 to 27.7777778', () => {
    expect(kphToMPS(100)).toEqual(27.7777778);
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


describe('mphToMPS', () => {
  test('50 to 22.352', () => {
    expect(mphToMPS(50)).toEqual(22.352);
  });
  test('16 to 35.7904', () => {
    expect(mphToMPS(16)).toEqual(7.15264);
  });
});
