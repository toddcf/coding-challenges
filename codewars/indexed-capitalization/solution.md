# Indexed Capitalization Solution

```
function capitalize( s, arr ) {
				
	var letters = s.split( "" );
	console.log( letters );

	var current;
	var cap;

	for ( var i = 0; i < arr.length; i++ ) {
		if ( arr[ i ] <= letters.length ) {
			cap = letters[ arr[ i ] ].toUpperCase();
			letters.splice( arr[ i ], 1, cap );
		}
	}
	result = letters.join( "" );
	console.log( result );
	return result;

};

capitalize("abcdef",[1,2,5,100]);
```
