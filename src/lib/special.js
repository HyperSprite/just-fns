const {
  round,
  secondsToTime,
} = require('./helpers');

const {
  metersToFeet,
  metersToMiles,
  metersToKm,
  mpsToKPH,
  mpsToMPH,
} = require('./meas-conv');
/**
*
* Special functions
*
*/

/**
* metric = 'time', 'dst', 'elev', 'cal', 'kj' type: string
* yAxis = bool - for recharts
* data = non-formatted number, like time in seconds, dist in meters.
* mPref = true for Imperial, false for Metric
*/
const statsConversions = (metric, yAxis, data, mPref) => {
  if (data || data === 0) {
    switch (metric) {
      case 'time':
        return secondsToTime(data);
      case 'dst':
        return round((mPref ? metersToMiles(data) : metersToKm(data)), 1);
      case 'spd':
        return round((mPref ? mpsToMPH(data) : mpsToKPH(data)), 1);
      case 'elev':
        return round((mPref ? metersToFeet(data) : data), 0);
      case 'cal':
      case 'kj':
      case 'tss':
        return round(data, 0);
      default:
        return data;
    }
  }
  if (yAxis) {
    switch (metric) {
      case 'time':
        return secondsToTime;
      case 'dst':
        return (m, p) => round(metersToMiles(m), p);
      case 'elev':
        return (m, p) => round(metersToFeet(m), p);
      default:
        return null;
    }
  }
  return null;
};

// metric = 'speedS', 'speedL' 'dstS', 'dstL', 'temp' type: string
// mPref = true for SAE, false for Metric
// returns an object { display: , help: } : { display: , help: };
const mPrefLabel = (metric, mPref) => {
  switch (metric) {
    case ('speedS'):
      return mPref
        ? { display: 'fps', help: 'Feet per Second' }
        : { display: 'm/s', help: 'Meters / Second' };
    case ('speedL'):
      return mPref
        ? { display: 'mph', help: 'Miles per Hour' }
        : { display: 'km/h', help: 'Kilometers / Hour' };
    case ('dstS'):
      return mPref
        ? { display: 'ft', help: 'Feet' }
        : { display: 'm', help: 'Meters' };
    case ('dstL'):
      return mPref
        ? { display: 'mi', help: 'Miles' }
        : { display: 'km', help: 'Kilometers' };
    case ('temp'):
      return mPref
        ? { display: '°F', help: 'Fahrenheit' }
        : { display: '°C', help: 'Celsius' };
    default:
      return mPref
        ? { display: 'Imperial', help: '' }
        : { display: 'Metric', help: '' };
  }
};

module.exports = {
  mPrefLabel,
  statsConversions,
};
