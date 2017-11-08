# Factorial Solution

## Solution 1: Counting UP, which is the more concise solution:

```
function factorialUp ( num3 ) {

	// Define a result variable
	var result = 1;

	// Unnecessary to start i at 1, as it will simply multiply 1 * 1.
	for ( var i = 2; i <= num3; i++ ) {
		result *= i; /* This is a shorter way of writing result = result * i; */
	}

	return result;

}
```

## Solution 2: Counting DOWN:

```
function factorialDown ( num4 ) {

	// Define a result variable
	var result = num4;

	if ( num4 === 0 ) {
		return 1;
	}
	
	for ( var i = num4 - 1; i >= 1; i-- ) {
		result *= i; /* This is a shorter way of writing result = result * i; */
	}

	return result;

}

factorialUp(5); /*120*/
factorialUp(2); /*2*/
factorialUp(10); /*3628800*/
factorialUp(0); /*1*/
```
