function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

// Test the function
console.log(fibonacci(0)); 
console.log(fibonacci(1)); 
console.log(fibonacci(2)); 
console.log(fibonacci(3));
console.log(fibonacci(4)); 
console.log(fibonacci(5)); 
console.log(fibonacci(6)); 
