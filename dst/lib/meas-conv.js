/**
*
* Measurement conversion functions
*
*/
var kgToPounds = function kgToPounds(kg) {
  return kg * 2.20462;
};
var poundsToKg = function poundsToKg(lb) {
  return lb * 0.453592;
};
var metersToFeet = function metersToFeet(m) {
  return m * 3.28084;
};
var ftToMeters = function ftToMeters(ft) {
  return ft * 0.3048;
};
var metersToMiles = function metersToMiles(m) {
  return m * 0.00062137121212121;
};
var milesToMeters = function milesToMeters(ml) {
  return ml * 1609.34;
};
var metersToKm = function metersToKm(m) {
  return m / 1000;
};
var kmToMeters = function kmToMeters(km) {
  return km * 1000;
};
var mpsToKPH = function mpsToKPH(m) {
  return m * 3.6;
};
var kphToMPS = function kphToMPS(kph) {
  return kph * 0.277777778;
};
var mpsToMPH = function mpsToMPH(m) {
  return m * 2.2369;
};
var mphToMPS = function mphToMPS(mph) {
  return mph * 0.44704;
};

module.exports = {
  kgToPounds: kgToPounds,
  poundsToKg: poundsToKg,
  metersToFeet: metersToFeet,
  ftToMeters: ftToMeters,
  metersToMiles: metersToMiles,
  milesToMeters: milesToMeters,
  metersToKm: metersToKm,
  kmToMeters: kmToMeters,
  mpsToKPH: mpsToKPH,
  kphToMPS: kphToMPS,
  mpsToMPH: mpsToMPH,
  mphToMPS: mphToMPS
};