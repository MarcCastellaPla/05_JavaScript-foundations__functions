//import and execute
import transformCollectionToString from './transformCollectionToString.js';

console.log("Ex 10")
console.log("transformCollectionToString", transformCollectionToString([""])) // Expected: <empty string>
console.log("transformCollectionToString", transformCollectionToString([])) // Expected: <empty string>
console.log("transformCollectionToString", transformCollectionToString(["Hello", "How are you"])) // Expected: Hello | How are you
console.log("transformCollectionToString", transformCollectionToString([1, 2])) // Expected: 1 | 2
console.log("transformCollectionToString", transformCollectionToString([true, false])) // Expected: true | false
console.log("-----------------------------------------")