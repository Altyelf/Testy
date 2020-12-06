//## Exercise #13
//
//Turn an array of numbers into a total of all the numbers.
//
//```javascript


function total(arr) {
  const arrSum = arr => arr.reduce((a, b) => a + b, 0)
  console.log(arrSum)
}

console.log(total([1, 2, 3]));
