# Directions Reduction

My solution, which I think is more accurate because it prevents you from going in a circle, even if the opposing directions are not consecutive:

```
function dirReduc(arr){

	var north = 0;
	var south = 0;
	var east = 0;
	var west = 0;
	var direction;
	var reduced = [];

	for ( var i = 0; i < arr.length; i++ ) {

		direction = arr[ i ];

		switch ( direction ) {
			case "NORTH":
				north++;
				break;
			case "SOUTH":
				south++;
				break;
			case "EAST":
				east++;
				break;
			case "WEST":
				west++;
				break;
		}

	}

	if ( north >= south ) {
		north = north - south;
		south = 0;
	}
	else {
		south = south - north;
		north = 0;
	}

	if ( east >= west ) {
		east = east - west;
		west = 0;
	}
	else {
		west = west - east;
		east = 0;
	}


	if ( north > 0 ) {
		for ( north; north > 0; north-- )
			reduced.push( "NORTH" );
	}

	if ( south > 0 ) {
		for ( south; south > 0; south-- )
			reduced.push( "SOUTH" );
	}

	if ( east > 0 ) {
		for ( east; east > 0; east-- )
			reduced.push( "EAST" );
	}

	if ( west > 0 ) {
		for ( west; west > 0; west-- )
			reduced.push( "WEST" );
	}

	return reduced;

}

```

But because the solution seems to want you to be able to go in a circle, here is my variation, which is NOT "D.R.Y.", but runs:

```
function dirReduc(arr) {

	for ( var i = 0; i < arr.length; i++ ) {					

		if ( ( arr[ i ] === "NORTH" ) && ( ( arr[ i + 1 ] ) === "SOUTH" ) ) {
			delete arr[ i ];
			delete arr[ i + 1 ];
		}
		else if ( ( arr[ i ] === "SOUTH" ) && ( ( arr[ i + 1 ] ) === "NORTH" ) ) {
			delete arr[ i ];
			delete arr[ i + 1 ];
		}
		else if ( ( arr[ i ] === "EAST" ) && ( ( arr[ i + 1 ] ) === "WEST" ) ) {
			delete arr[ i ];
			delete arr[ i + 1 ];
		}
		else if ( ( arr[ i ] === "WEST" ) && ( ( arr[ i + 1 ] ) === "EAST" ) ) {
			delete arr[ i ];
			delete arr[ i + 1 ];
		}

		console.log( "Index = " + i + " after: " + arr );

	}

	arr = arr.filter( function( n ) {
		return n != undefined;
	} );

	for ( var i = 0; i < arr.length; i++ ) {

		if ( ( arr[ i ] === "NORTH" ) && ( ( arr[ i + 1 ] ) === "SOUTH" ) ) {
			delete arr[ i ];
			delete arr[ i + 1 ];
		}
		else if ( ( arr[ i ] === "SOUTH" ) && ( ( arr[ i + 1 ] ) === "NORTH" ) ) {
			delete arr[ i ];
			delete arr[ i + 1 ];
		}
		else if ( ( arr[ i ] === "EAST" ) && ( ( arr[ i + 1 ] ) === "WEST" ) ) {
			delete arr[ i ];
			delete arr[ i + 1 ];
		}
		else if ( ( arr[ i ] === "WEST" ) && ( ( arr[ i + 1 ] ) === "EAST" ) ) {
			delete arr[ i ];
			delete arr[ i + 1 ];
		}

	}

	arr = arr.filter( function( n ) {
		return n != undefined;
	} );

	return ( arr );

}
```

Here is the most D.R.Y. version on CodeWars:

```
function dirReduc(arr){
  var opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
  return arr.reduce(function (a, b, i) {
    opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
    return a
  }, [])
}
```

Or:

```
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}
```
