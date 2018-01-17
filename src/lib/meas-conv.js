/**
*
* Measurement conversion functions
*
*/
const kgToPounds = kg => kg * 2.20462;
const poundsToKg = lb => lb * 0.453592;
const metersToFeet = m => m * 3.28084;
const ftToMeters = ft => ft * 0.3048;
const metersToMiles = m => m * 0.00062137121212121;
const milesToMeters = ml => ml * 1609.34;
const metersToKm = m => m / 1000;
const kmToMeters = km => km * 1000;
const mpsToKPH = m => m * 3.6;
const kphToMPS = kph => kph * 0.277777778;
const mpsToMPH = m => m * 2.2369;
const mphToMPS = mph => mph * 0.44704;

module.exports = {
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
};
