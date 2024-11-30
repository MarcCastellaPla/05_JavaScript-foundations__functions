//import and execute
import checkCollectionHasElements from "./checkCollectionHasElements.js";

console.log("Ex 06")
console.log("checkCollectionHasElements", checkCollectionHasElements( ["a"])); // Expected: true
console.log("checkCollectionHasElements", checkCollectionHasElements([])); // Expected: false
console.log("checkCollectionHasElements", checkCollectionHasElements([1])); // Expected: true
console.log("checkCollectionHasElements", checkCollectionHasElements([true])); // Expected: true
console.log("checkCollectionHasElements", checkCollectionHasElements([false])); // Expected: true
console.log("checkCollectionHasElements", checkCollectionHasElements([null])); // Expected: true
console.log("checkCollectionHasElements", checkCollectionHasElements([undefined])); // Expected: true
console.log("-----------------------------------------")
