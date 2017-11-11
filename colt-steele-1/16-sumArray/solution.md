# isUniform Solution

## Using a For Loop:

```
function sumArray( arr ) {

	var total = arr[ 0 ];

	for ( var i = 1; i < arr.length; i++ ) {
		total += arr[ i ]
	}

	console.log( total );
}
```

## Using a forEach Loop:

```
function sumArray( arr ) {

	var total = 0;

	arr.forEach( function( num ) {
		total += num;
	});

	console.log( total );
}
```
