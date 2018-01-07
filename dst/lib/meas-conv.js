var _require = require('./helpers'),
    round = _require.round;
/**
*
* Measurement conversion functions
*
*/


var kgToPounds = function kgToPounds(kg) {
  return kg * 2.20462;
};
var metersToFeet = function metersToFeet(m) {
  return m * 3.28084;
};
var metersToMiles = function metersToMiles(m) {
  return m * 0.00062137121212121;
};
var metersToKm = function metersToKm(m) {
  return m / 1000;
};
var mpsToKPH = function mpsToKPH(m) {
  return m * 3.6;
};
var mpsToMPH = function mpsToMPH(m) {
  return m * 2.2369;
};

var kgToPoundsRound = function kgToPoundsRound(kg, p) {
  return round(kgToPounds(kg), p);
};
var metersToFeetRound = function metersToFeetRound(m, p) {
  return round(metersToFeet(m), p);
};
var metersToMilesRound = function metersToMilesRound(m, p) {
  return round(metersToMiles(m), p);
};
var metersToKmRound = function metersToKmRound(m, p) {
  return round(metersToKm(m), p);
};
var mpsToKPHRound = function mpsToKPHRound(m, p) {
  return round(mpsToKPH(m), p);
};
var mpsToMPHRound = function mpsToMPHRound(m, p) {
  return round(mpsToMPH(m), p);
};

module.exports = {
  kgToPounds: kgToPounds,
  metersToFeet: metersToFeet,
  metersToMiles: metersToMiles,
  metersToKm: metersToKm,
  mpsToKPH: mpsToKPH,
  mpsToMPH: mpsToMPH,
  kgToPoundsRound: kgToPoundsRound,
  metersToFeetRound: metersToFeetRound,
  metersToMilesRound: metersToMilesRound,
  metersToKmRound: metersToKmRound,
  mpsToKPHRound: mpsToKPHRound,
  mpsToMPHRound: mpsToMPHRound
};