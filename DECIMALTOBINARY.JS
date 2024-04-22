function decimalToBinary(decimal) {
    return decimal.toString(2);
}

const decimalNumber = 37;
const binaryRepresentation = decimalToBinary(decimalNumber);
console.log(`Binary representation of ${decimalNumber} is: ${binaryRepresentation}`);
