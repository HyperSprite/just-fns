# Just functions

This is a collection of functions for performing various calculations for cycling related data, as found on Strava, TrainingPeaks and TrainerRoad. I am using them in [araceathlete.com](https://www.araceathlete.com/) and wanted to break this out into its own module for "simplicity". Most of these are used in the view for converting raw data into something user friendly.

The functions are broken down into three parts:

**Helpers**: These are just basic functions for shaping data returns that I was doing in multiple places.

**Measurement Conversion**: These take a measurement and convert it to some other measurement.

**Cycling**: These are cycling specific functions for returning other metrics. I've formulated them based on information I have found at Strava, TrainingPeaks, TrainerRoad and others into JavaScript. From my testing, they return the same values Strava would return given the same input. For example, using ```calcTssScore``` and a mongodb aggregation to exponentially calculate Fitness over three years of activity returns the same Fitness and Fatigue numbers as the Strava chart.

## Helpers

### Divide and Round

Takes two numbers and divides and rounds the result.

#### ```divideAndRound(dividend: Number, divisor: Number, places: Number)```

```js
divideAndRound(190, 240, 2); // returns 0.79
```

### Get Value for Specific Key in Last Element of an Array of Objects

Takes an array of objects and returns the last value of the key_name from the last element.

#### ```getLastInArray(arrOfObj: Array, key_name: String)```

```js
const arr = [
  { weight: 160, age: 27 },
  { weight: 165, age: 28 },
  { weight: 168, age: 29 },
];

getLastInArray(arr, 'weight'); // returns 168
```

### Highest Consecutive Average

Finds the highest consecutive average of a specified number of elements in an array. For instance, could be used to find the highest heart rate over five seconds in a Stava Activity Stream.

#### ```hiConsAvg(arr: Array, elements: Number)```

```js
hiConsAvg([2.55, 3, 3, 2.3, 2, 4], 3); // returns 2.85
```

### Round

Just rounds numbers.

#### ```round(number: Number, places: Number)```

```js
round(1.535, 2); // returns 1.54
```

### Seconds to Time

Takes seconds and converts them to human readable time. Returns seconds as Days, Hours and Minutes.

#### ```secondsToTime(seconds: Number)```

```js
secondsToTime(5847708); // returns 67 days 16:21
```




## Measurement Conversion

These all work the same and the units seem self explanatory.
For example ```kgToPounds``` returns Lbs from a number of Kilograms. These also include round options.
#### ```kgToPounds(kilograms: Number)```
#### ```kgToPoundsRound(kilograms: Number, places: Number)```

#### These include:

* kgToPounds - Kilograms to Pounds
* metersToFeet - Meters to Feet
* metersToMiles - Meters to Miles
* metersToKm - Meters to Kilometers
* mpsToKPH - Meters per second to Kilometers per hour
* mpsToMPH - Meters per second to Miles per hour


```js
kgToPounds(8); // returns 17.63696
kgToPoundsRound(8, 3); // returns 17.637
kgToPoundsRound(8); // returns 18
```




## Cycling

### Altitude Index
Altitude Index takes the planned altitude and user altitude in Meters and returns the index used for calculating percent of FTP at altitude. It was added to simplify input of ```percentFTPAcc``` and ```percentFTPNAcc``` below. It may be used in future versions of Difficulty Index to add weight to the difference in altitude on a per user basis.

#### ```altitudeIndex(altitude: Number, userAltitude: Number)```

```js
altitudeIndex(500, 24.575);  // returns 0.25425
```

### Percent of FTP at Altitude
These two functions deal with relative FTP at a specific altitude. The first for an Acclimatized Athlete, the second for Non-Acclimatized Athlete. For more information see this blog post: [araceathlete.com/blog/power-at-altitude/](https://www.araceathlete.com/blog/power-at-altitude/)

#### ```percentFTPAcc(altitude: Number - (userAltitude: Number * 0.01)```

* percentFTPAcc - Acclimatized Athlete
* percentFTPNAcc - Non-Acclimatized Athlete

```js
percentFTPAcc(altitudeIndex(500, 24.575)); // returns 99.34452477
```

### Calculate TSS Score
These functions calculate TSS based activity Elapsed Time and Athletes FTP. For more information on TSS and FTP see these blog posts here: [Power](https://www.araceathlete.com/blog/tag?power)

#### ```calcTssScore(elapsed_time: Number, weighted_average_watts: Number, ftp: Number)```

* calcTssScore
* calcTssScoreRound

```js
calcTssScoreRound(29377, 205, 253); // returns 535.76
```

### Difficulty Index
Difficulty index is a new calculation based on Distance and Elevation. It lets a Athlete compare previously known activities and a route to help them decide if it seems reasonable to them.

#### ```difficultyIndex(totalEleGain: Number, distance: Number)```

```js
difficultyIndex(2000, 90000); // returns 4.44
```



### Do Not Use
These functions handle prepping data for display and are too specialized for reuse or their own good. They will probably be depreciated.

* statsConversions
* mPrefLabel
