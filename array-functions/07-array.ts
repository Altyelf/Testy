//## Exercise #7
//
//You get an array of numbers, return the sum of all of the positives ones.
//
//Example:
//
//```javascript
//[1, -4, 7, 12]; // => 1 + 7 + 12 = 20

function positiveSum(arr) {
  return arr.reduce((prev, current) => {
    if (current > 0) {
      return prev + current;
    }

    return prev
  }, 0)
}

console.log(positiveSum([1, -4, 7, 12]));