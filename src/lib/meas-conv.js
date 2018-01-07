const {
  round,
} = require('./helpers');
/**
*
* Measurement conversion functions
*
*/
const kgToPounds = kg => kg * 2.20462;
const metersToFeet = m => m * 3.28084;
const metersToMiles = m => m * 0.00062137121212121;
const metersToKm = m => m / 1000;
const mpsToKPH = m => m * 3.6;
const mpsToMPH = m => m * 2.2369;

const kgToPoundsRound = (kg, p) => round(kgToPounds(kg), p);
const metersToFeetRound = (m, p) => round(metersToFeet(m), p);
const metersToMilesRound = (m, p) => round(metersToMiles(m), p);
const metersToKmRound = (m, p) => round(metersToKm(m), p);
const mpsToKPHRound = (m, p) => round(mpsToKPH(m), p);
const mpsToMPHRound = (m, p) => round(mpsToMPH(m), p);

module.exports = {
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
};
