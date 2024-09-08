function get_Max_Toys(prices, money) {
    let maxToys = 0;
    let currentToys = 0;
    let currentSum = 0;
  
    for (let i = 0; i < prices.length; i++) {
      currentSum += prices[i];

      while (currentSum > money && currentToys > 0) {
        currentSum -= prices[currentToys - 1];
        currentToys--;
      }
  
      if (currentSum <= money) {
        maxToys = Math.max(maxToys, currentToys + 1);
      }
    }
  
    return maxToys;
  }
  
const n =7;
const prices = [1,4,5,3,2,1,6];
const money =6
  
const maxToys = get_Max_Toys(prices, money);
console.log("Maximum number of toys you can purchase: " + maxToys);