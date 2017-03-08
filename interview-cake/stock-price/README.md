#Stock Price Coding Challenge
Differences in this alternate solution:
- Throws an error if the stock prices array is less than two items.
- Doesn't pass the profits into their own array; runs Math.max and stores it in a variable EVERY SINGLE ITERATION of the for loop.
- Uses the same technique for the minimum prices.  (Math.min.)
- Allows negative numbers to be used in the profit calculations, since a negative will never be the max, anyway.
(Or at least it shouldn't be -- but what if your stock only went down that day? This is one area where I like my solution better, although I
could still adjust mine to throw some sort of error if the stock only went down all day.)