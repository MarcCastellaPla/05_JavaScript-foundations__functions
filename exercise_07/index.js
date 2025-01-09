//import and execute
import isTypeOf from "./isTypeOf.js";

console.log("Ex 07")
console.log("isTypeOf", isTypeOf("data", 'number')); // Expected: false
console.log("isTypeOf", isTypeOf("data", 'string')); // Expected: true
console.log("isTypeOf", isTypeOf(5, 'number')); // Expected: true
console.log("isTypeOf", isTypeOf(5, 'string')); // Expected: false
console.log("isTypeOf", isTypeOf(true, 'number')); // Expected: false
console.log("isTypeOf", isTypeOf([], 'array')); // Expected:  true
console.log("-----------------------------------------")
