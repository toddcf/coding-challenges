# Write a function that checks whether a number is odd or even

## Standard Solution:

```
function isEven( num1 ) {
	if ( num1 % 2 === 0 ) {
		return true;
	}
	else {
		return false;
	}
}

isEven(4); /*true*/
isEven(21); /*false*/
isEven(68); /*true*/
isEven(333); /*false*/
```

## Shorter (and therefore better) Solution:

```
function isEven( num2 ) {
	return num2 % 2 === 0;
}
```

This works because returning that equation will either result in true or false!