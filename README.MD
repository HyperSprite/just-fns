# Just functions

This is a collection of functions for performing various calculations. Mostly having to do with measurements conversions that are useful for cycling stats.

They are as follows:

### divideAndRound(dividend: Number, divisor: Number, places: Number)
Takes two numbers and divides and rounds the result
```js
divideAndRound(190, 240, 2); // returns 0.79
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
### hiConsAvg(arr: Array, elements: Number)
Finds the highest consecutive average of a number of elements in an array.
```js
hiConsAvg([2.55, 3, 3, 2.3, 2, 4], 3) // returns 2.85
```

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


### Specialized Cycling functions:
These functions do specific things related to calculating cycling metrics and performance.

#### Percent of FTP at Altitude
These two functions deal with relative FTP at a specific altitude. The first for an Aclimatized Athlete, the second for Non-Aclimatized Athlete. For more information see this blog post: [araceathlete.com/blog/power-at-altitude/](https://www.araceathlete.com/blog/power-at-altitude/)

* percentFTPAcc
* percentFTPNAcc

#### Calculate TSS Score
These functions calculate TSS based activity Elapsed Time and Athletes current FTP. For more information on TSS and FTP see these blog posts here: [Power](https://www.araceathlete.com/blog/tag?power)

* calcTssScore
* calcTssScoreRound
```js
calcTssScore(elapsed_time, weighted_average_watts, ftp);
```

#### Difficulty Index
Difficulty index is a new calculation based on Distance and Elevation. It lets a Athlete compare previously known activities and a route to help them decide if it seems reasonable to them.

* difficultyIndex
```js
difficultyIndex(totalEleGain, distance)
```

### Do Not Use
These functions handle prepping data for display and are too specialized for reuse or their own good. They will probably be depreciated.

* statsConversions
* mPrefLabel
