function Stepping_Number(num) {
    let prevDigit = null;
    
    while (num > 0) {

      const digit = num % 10;
      if (prevDigit !== null && Math.abs(prevDigit - digit) !== 1) {
        return false;
      }

      prevDigit = digit;
      num = Math.floor(num / 10);
    }

    return true;
  }

  function findStepping_Numbers(n, m) {
    const steppingNumbers = [];

    for (let num = n; num <= m; num++) {
      if (Stepping_Number(num)) {
        steppingNumbers.push(num);
      }
    }

    return steppingNumbers;
}
  
  

const steppingNumbers = findStepping_Numbers(100, 500);
console.log(steppingNumbers);