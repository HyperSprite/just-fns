# Just functions

This is a collection of functions for performing various calculations. Mostly having to do with measurements conversions that are useful for cycling stats.

They are as follows:

round(number: Number, places: Number): returns a number rounded to 'places'
```js
round(1.535, 2) // returns 1.54
```


secondsToTime(seconds: Number): returns seconds as Days, Hours and Minutes
```js
secondsToTime(5847708) // returns 67 days 16:21
```

kgToPounds(kilograms: Number): returns Lbs from a number of Kilograms
```js
kgToPounds(8) // returns 17.63696
```

> \* includes Round option. Functions that include the Round options work as follows:
```js
kgToPoundsRound(8, 3) // returns 17.637
```

These work in a similar way and have the Round option.
* kgToPounds - Kilograms to Pounds
* metersToFeet - Meters to Feet
* metersToMiles - Meters to Miles
* metersToKm - Meters to Kilometers
* mpsToKPH - Meters per second to Kilometers per hour
* mpsToMPH - Meters per second to Miles per hour


divideAndRound(dividend: Number, divisor: Number, places: Number) - Takes two numbers and divides them and rounds the result
```js
divideAndRound(190, 240, 2) // returns 0.79
```

Specialized functions: See code comments and test for better understanding

* percentFTPAcc
* percentFTPNAcc
* statsConversions
* mPrefLabel
* getLastInArray
`
