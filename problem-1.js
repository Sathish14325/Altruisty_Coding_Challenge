function Unique_Numbers(arr) {
    let xorAll = 0;
    for (let num of arr) {
        xorAll ^= num;
    }

    let rightSetBit = xorAll & -xorAll;

    let num1 = 0, num2 = 0;
    for (let num of arr) {
        if (num & rightSetBit) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }

    return [num1, num2].sort((a, b) => a - b);
}

let arr = [2, 1, 3, 2];
console.log(Unique_Numbers(arr));
