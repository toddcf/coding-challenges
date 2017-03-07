// https://www.interviewcake.com/question/javascript/stock-price

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
var upAndDown = [12, 24, 30, 20, 10, 20, 21];

var getMaxProfit = function( arr ) {
	var min = arr[0];
	var max = arr[0];
	for ( var i = 0; i < arr.length; i++) {
		if ( arr[i] < min ) {
			min = arr[i];
		}
	};
	for ( var i = 0; i < arr.length; i++) {
		if ( arr[i] > max ) {
			max = arr[i];
		}
	};
	var profit = max - min;
	return profit;
	console.log(profit);
};

getMaxProfit(stockPricesYesterday);
// returns $6 (buying for $5 and selling for $11)
getMaxProfit(upAndDown);