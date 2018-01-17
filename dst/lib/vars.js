// contains useful vars for testing

var adjustedElev500 = 0.500 - 24.55533409118652 * 0.01;
var adjustedElev6000 = 6.000 - 24.55533409118652 * 0.01;
var arrA = [31, 32, 34, 33, 22, 23, 25, 23, 11, 42, 42, 42, 13, 15, 12, 13];
var arrB = [31, 32, 34, 33, 22, 23, 25, 23, 41, 43, 44, 47, 47, 47, 10, 10];
var arrOfObj = [{
  weight: 63,
  ftp: 250,
  et: 7200,
  waw: 240,
  tss: 184.32,
  totalEleGain: 1423,
  distance: 46733,
  diffI: 6.09
}, {
  weight: 63.1,
  ftp: 251,
  et: 39719,
  waw: 168,
  tss: 494.2730432850272,
  totalEleGain: 2000,
  distance: 90000,
  diffI: 4.44
}, {
  weight: 63.2,
  ftp: 252,
  et: 35547,
  waw: 156,
  tss: 378,
  totalEleGain: 1423,
  distance: 46733,
  diffI: 0
}, {
  weight: 63.3,
  ftp: 253,
  et: 29377,
  waw: 205,
  tss: 535.76,
  totalEleGain: 1423,
  distance: 46733,
  diffI: 0
}, {
  weight: 63.4,
  ftp: 254,
  et: 11685,
  waw: 207,
  tss: null,
  totalEleGain: 1423,
  distance: 46733,
  diffI: 0
}, {
  weight: 63.5,
  ftp: 255,
  et: 3521,
  waw: 227,
  tss: null,
  totalEleGain: 1423,
  distance: 46733,
  diffI: 0
}];
var userElv = 24.575;
var targetElvA = 500;
var targetElvB = 6000;

module.exports = {
  adjustedElev500: adjustedElev500,
  adjustedElev6000: adjustedElev6000,
  arrA: arrA,
  arrB: arrB,
  arrOfObj: arrOfObj,
  userElv: userElv,
  targetElvA: targetElvA,
  targetElvB: targetElvB
};