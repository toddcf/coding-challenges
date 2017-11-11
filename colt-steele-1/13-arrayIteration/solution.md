# Array Iteration Solution

`3`
`6`
`9`

This is a trick question. The `colors` array is extranneous information, and should be ignored. And the `color` argument is just a word -- it could have been called anything at all -- and refers to elements in the `numbers` array, not to any actual colors.

All we are doing is iterating through the `numbers` array and checking for numbers that are divisible by `3`. Only these numbers will be printed to the console; all others will be ignored. So all you get are:

`3`
`6`
`9`

## Extra Credit

The same code, rewritten as a for loop:

```
var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

for (var i = 1; i < numbers.length; i++ ) {
	if ( i % 3 === 0 ) {
		console.log( i );
	}
}
```
