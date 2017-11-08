// alert("product.js file is linked!");

var numbers = [1, 7, 3, 4];

// Write a function that returns the product of all the other numbers in the array -- but NOT the number at the index you're on.

var getProductsOfAllIntsExceptAtIndex = function( arr ) {
	var products = [];
	// For loop
	for ( i = 0; i < numbers.length; i++ ) {
		// In the first iteration, multiply the numbers EXCEPT FOR 1. Do not use division.
		// Possibly use array.reduce?
		// Examine http://www.w3resource.com/javascript-exercises/javascript-array-exercise-12.php
		// Push to new array.
		products.push(  );
		// Return a new array for each iteration of the for loop:
		console.log(products);
		return products;
	}
};

// Call function:
getProductsOfAllIntsExceptAtIndex( numbers );