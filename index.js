function add(a, b) {
return a + b;
}
function subtract(a , b) {
return a - b;
}
function multiply(a, b) {
return a * b;
}
function divide(a , b) {
return a / b;
}
function increment(number = 10) {
    return number += 1;
}
function decrement(number = 20) {
    return number -=1;
}
function makeInt(n) {
    console.log(n)
    return parseInt(n, 10);
}
console.log(makeInt ("321", 10));

function preserveDecimal(n) {
    return parseFloat(n);
}
console.log(preserveDecimal (3.66781));
