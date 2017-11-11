# isUniform Solution

## Using a For Loop:

```
function isUniform( arr ) {

	var firstItem = arr[ 0 ];
	var uniform;

	for ( var i = 1; i < arr.length; i++ ) {
		if ( arr[ i ] !== firstItem ) {
			uniform = false;
		}
		else {
			uniform = true;
		}
	}
	console.log( uniform );
}
```

## Using a forEach Loop:

```
function isUniform( arr ) {

	var firstItem = arr[ 0 ];
	var uniform = true;

	arr.forEach( function( item ) {
		if ( item !== firstItem ) {
			uniform = false;
			return;
		}
	});

	console.log( uniform );

}
```
