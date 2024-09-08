function remove_Digits(price, k) {
    const digits = price.split('').map(Number);

    for (let i = 0; i < k; i++) {

      let maxIndex = 0;

      for (let j = 1; j < digits.length; j++) {
        if (digits[j] > digits[maxIndex]) {
          maxIndex = j;
        }
      }

      digits.splice(maxIndex, 1);
    }

    const reducedPrice = digits.join('');
    
    return parseInt(reducedPrice, 10);
}
  
const tickets ="800";
const k = 2;
  
const reducedPrices = tickets.split(' ').map(price => remove_Digits(price, k));
  
console.log(reducedPrices.join(' '));