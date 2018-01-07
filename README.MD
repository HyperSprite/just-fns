# Just functions

This is a collection of functions for performing various calculations. Mostly having to do with measurements conversions that are useful for cycling stats.

They are as follows:

### round(number: Number, places: Number)
Returns a number rounded to places
```js
round(1.535, 2); // returns 1.54
```


### secondsToTime(seconds: Number)
Returns seconds as Days, Hours and Minutes
```js
secondsToTime(5847708); // returns 67 days 16:21
```

### getLastInArray(arrOfObj: Array, key_name: String)
Takes an array of objects and returns the last value of the key_name from the last element.
```js
const arr = [
  { weight: 160, age: 27 },
  { weight: 165, age: 28 },
  { weight: 168, age: 29 },
];

getLastInArray(arr, 'weight'); // returns 168
```

### divideAndRound(dividend: Number, divisor: Number, places: Number)
Takes two numbers and divides and rounds the result
```js
divideAndRound(190, 240, 2); // returns 0.79
```

### One Measurement to Another Measurement

Example:
#### kgToPounds(kilograms: Number)
Returns Lbs from a number of Kilograms. These also include round options
```js
kgToPounds(8); // returns 17.63696
kgToPoundsRound(8, 3); // returns 17.637
kgToPoundsRound(8); // returns 18
```

These include:
* kgToPounds - Kilograms to Pounds
* metersToFeet - Meters to Feet
* metersToMiles - Meters to Miles
* metersToKm - Meters to Kilometers
* mpsToKPH - Meters per second to Kilometers per hour
* mpsToMPH - Meters per second to Miles per hour


Specialized functions: See code comments and test for better understanding
> TODO Add detailed description of these functions

* percentFTPAcc
* percentFTPNAcc
* calcTssScore
* calcTssScoreRound
* statsConversions
* mPrefLabel
