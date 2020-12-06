//## Exercise #9
//
//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
//Example:
//
//```javascript
//[1, 2, 2]; // => 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
    return numbers.reduce((acc,curr)=> acc + curr * curr, 0);
}
