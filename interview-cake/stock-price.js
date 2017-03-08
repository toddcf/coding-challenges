// https://www.interviewcake.com/question/javascript/stock-price

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
var upAndDown = [12, 24, 30, 20, 10, 20, 21];

var getMaxProfit = function( arr ) {
	// Set the first number in the array to the min just to get started:
	var min = arr[0];
	// Empty array. Any profits will be pushed here during the for loop:
	var profit = [];
	// Declare aProfit variable in this scope:
	var aProfit;
	// Skip the first number in the array in the for loop, as it has already been set to min:
	for ( var i = 1; i < arr.length; i++) {
		// If current i is less than the min, make it the new min:
		if ( arr[i] < min ) {
			min = arr[i];
		}
		// If next number is higher than the current min, subtract the current min from that number:
		else if ( arr[i] > min) {
			aProfit = ( arr[i] - min );
			// console.log(aProfit);
			// Push aProfit to a the profit array:
			profit.push(aProfit);
		}
	};
	console.log(profit);
	// Use Math.max to locate the max profit from the profit array:
	var maxProfit = profit.reduce(function(a, b) {
		return Math.max(a, b);
	});
	console.log("Max Profit: $" + maxProfit);
	return maxProfit;
};

getMaxProfit(stockPricesYesterday);
// returns $6 (buying for $5 and selling for $11).
getMaxProfit(upAndDown);
// Should return $18 (buying for $12 and selling for $30).