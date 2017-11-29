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

But because the solution seems to want you to be able to go in a circle, here is my variation:

