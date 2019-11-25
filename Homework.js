# 5
## Maximum of Three Numbers
Define a function `maxOfThree` that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.

```javascript
console.log(maxOfThree(6, 9, 1));
```
const maxofThree = ( a, b, c ) => {
   return Math.max ( a, b, c );
}
console.log(maxofThree(6, 9, 1));
> => 9


# 6
## Print Longest Word

Write a function `printLongestWord` that accepts a single argument, an **array of strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

```javascript
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
```

const printLongestWord = function( arr )  {
  let long = '';
  for ( var i = 0; i < arr.length; i ++ ){
    if ( arr[i].length > long.length ){
      long = arr[i];
    }
  }
  return long;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

> => "Peanutbutter"


# 7
## Transmogrify the Numbers
Write a Javascript function called `transmogrify`. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.

The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.

For example, the transmogrified result of 5, 3, and 2 is `(5 times 3) to the
power of 2` is 225.

```javascript
console.log(transmogrify(5, 3, 2));
```
const transmogrify = function( n1 , n2 , n3)  => {
  return ( n1 * n2 ) ** n3;
}
console.log(transmogrify(5, 3, 2));
> => 225

<br>
<hr>


