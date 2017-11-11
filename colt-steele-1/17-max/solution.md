# isUniform Solution

## Using a For Loop:

```
function max( arr ) {

	var highest = arr[ 0 ];

	for ( var i = 1; i < arr.length; i++ ) {
		if ( arr[ i ] > highest ) {
			highest = arr[ i ];
		}
	}

	console.log( highest );
	
}
```

## Using a forEach Loop:

```
function max( arr ) {

	var highest = arr[ 0 ];

	arr.forEach( function ( num ) {
		if ( num > highest ) {
			highest = num;
		}
	});

	console.log( highest );

}
```
