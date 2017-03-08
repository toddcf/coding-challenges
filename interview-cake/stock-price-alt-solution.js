function getMaxProfit(stockPricesYesterday) {

    // make sure we have at least 2 prices
    if (stockPricesYesterday.length < 2) {
        throw new Error('Getting a profit requires at least 2 prices');
    }

    // we'll greedily update minPrice and maxProfit, so we initialize
    // them to the first price and the first possible profit
    var minPrice = stockPricesYesterday[0];
    var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

    // start at the second (index 1) time
    // we can't sell at the first time, since we must buy first,
    // and we can't buy and sell at the same time!
    // if we started at index 0, we'd try to buy *and* sell at time 0.
    // this would give a profit of 0, which is a problem if our
    // maxProfit is supposed to be *negative*--we'd return 0!
    for (var i = 1; i < stockPricesYesterday.length; i++) {
        var currentPrice = stockPricesYesterday[i];

        // see what our profit would be if we bought at the
        // min price and sold at the current price
        var potentialProfit = currentPrice - minPrice;

        // update maxProfit if we can do better
        maxProfit = Math.max(maxProfit, potentialProfit);

        // update minPrice so it's always
        // the lowest price we've seen so far
        minPrice = Math.min(minPrice, currentPrice);
    }

    return maxProfit;
}

/*
Differences in this alternate solution:
- Throws an error if the stock prices array is less than two items.
- Doesn't pass the profits into their own array; runs Math.max and stores it in a variable EVERY SINGLE ITERATION of the for loop.
- Uses the same technique for the minimum prices.  (Math.min.)
- Allows negative numbers to be used in the profit calculations, since a negative will never be the max, anyway.
(Or at least it shouldn't be -- but what if your stock only went down that day? This is one area where I like my solution better, although I
could still adjust mine to throw some sort of error if the stock only went down all day.)
*/