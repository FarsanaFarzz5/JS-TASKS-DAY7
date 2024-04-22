function sumOfDigits(number) {
    return number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Example usage:
console.log(sumOfDigits(123)); // Output: 6 (1 + 2 + 3 = 6)
console.log(sumOfDigits(9876)); // Output: 30 (9 + 8 + 7 + 6 = 30)
