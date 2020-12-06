//## Exercise #2
//
//Make an array of numbers that are doubles of the first array.
//
//```javascript

function doubleNumbers(arr) {
 let newArr=arr.map(x => 2 * x)
 console.log(newArr)
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
