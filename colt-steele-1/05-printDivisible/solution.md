# Print all numbers divisible by 5 AND 3 between 5 and 50

## While Loop Solution:

```
var numD = 5;

while ( numD <= 50 ) {
	if ( ( numD % 5 === 0 ) && ( numD % 3 === 0 ) ) {
		console.log( "numD = " + numD );
	}
	numD++;
}
```

## For Loop Solution:

```
for ( var i = 5; i <= 50; i++ ) {
	if ( i % 5 === 0 && i % 3 === 0 ) {
		console.log( i );
	}
}
```
