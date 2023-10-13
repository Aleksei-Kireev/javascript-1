const prices = [[100, 200], [120, 100], [200, 350]];

const positiveSales = prices
    .map(prices => {
        return prices[1] - prices[0];
    })
    .filter(val => {
        return val > 0;
    });

console.log(positiveSales);