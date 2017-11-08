# kebabToSnake Solution

```
function kebabToSnake( str ) {
	/*var snake = str.replace( "-", "_" );*/
	var snake = str.replace( /-/g, "_" );
	return snake;
}

kebabToSnake( "hello-world" ); /*hello_world*/
kebabToSnake( "dogs-are-awesome" ); /*dogs_are_awesome*/
kebabToSnake( "blah" ); /*blah
```
