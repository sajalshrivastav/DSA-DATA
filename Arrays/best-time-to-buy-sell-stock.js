var maxProfit = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];

        console.log(`Day ${i}: Price = ${price}`);

        // Update minPrice if current price is lower
        minPrice = Math.min(minPrice, price);
        console.log(`  Updated minPrice = ${minPrice}`);

        // Calculate potential profit
        const potentialProfit = price - minPrice;
        console.log(`  Potential Profit if sold today = ${potentialProfit}`);

        // Update maxProfit if this is better
        maxProfit = Math.max(maxProfit, potentialProfit);
        console.log(`  Updated maxProfit = ${maxProfit}`);
    }

    console.log(`Final Max Profit = ${maxProfit}`);
    return maxProfit;
};
let arra = [7, 1, 5, 3, 6, 4]
maxProfit(arra)
