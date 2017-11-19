# Build Tower Solution

Not the most concise, but the one I came up with:

```
function towerBuilder(nFloors) {

	var arr = [];
	var str;
	var outerSpaces;
	var innerBlocks;
	var strOuter;
	var strInner;
	
	for ( var i = 0; i < nFloors; i++ ) {
		
		outerSpaces = ( nFloors - (i + 1) );
		strOuter = " ".repeat( outerSpaces );

		innerBlocks = i + ( i + 1 );
		strInner = "*".repeat( innerBlocks );

		str = strOuter + strInner + strOuter;
		arr.push( str );
	}
	
	return arr;
}

towerBuilder( 3 );
```
