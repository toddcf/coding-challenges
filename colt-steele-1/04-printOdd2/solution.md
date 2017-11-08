# Print all odd numbers between 300 and 333

## While Loop Solution:

```
var numC = 300;

while ( numC <= 333 ) {
	console.log( "numC = " + ( numC + 1 ) );
	numC += 2;
}
```

## For Loop Solution:

```
for ( var i = 300; i <=333; i ++ ) {
	if ( i % 2 !== 0 ) {
		console.log( i );
	}
}
```
