// contains useful vars for testing

const adjustedElev500 = 0.500 - (24.55533409118652 * 0.01);
const adjustedElev6000 = 6.000 - (24.55533409118652 * 0.01);
const arrOfObj = [
  { weight: 63, ftp: 250, et: 7200, waw: 240, tss: 184.32 }, // eslint-disable-line object-curly-newline
  { weight: 63.1, ftp: 251, et: 39719, waw: 168, tss: 494.2730432850272 }, // eslint-disable-line object-curly-newline
  { weight: 63.2, ftp: 252, et: 35547, waw: 156, tss: 378 }, // eslint-disable-line object-curly-newline
  { weight: 63.3, ftp: 253, et: 29377, waw: 205, tss: 535.76 }, // eslint-disable-line object-curly-newline
  { weight: 63.4, ftp: 254, et: 11685, waw: 207, tss: null }, // eslint-disable-line object-curly-newline
  { weight: 63.5, ftp: 255, et: 3521, waw: 227, tss: null }, // eslint-disable-line object-curly-newline
];

module.exports = {
  adjustedElev500,
  adjustedElev6000,
  arrOfObj,
};