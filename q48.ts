// Question 48: Combining Arrays with Spread Operator: Suppose you're
//  comparing prices of two different sets of laptops. Use the spread operator 
//  to combine these arrays into a single array sorted in ascending order,
//   then log the result.

// My way to do this
let laptop1 = ["Dell","G series",2022,"Price: pkr-40k"]

let laptop2 = ["Apple","MacBook Air",2020,"Price: pkr-70k"]

let compareLaptops = [...laptop1,...laptop2];
console.log(compareLaptops)


// 2nd way
let pricesSet1 = [1200, 1500, 1100];
let pricesSet2 = [1000, 1300, 1600];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);
