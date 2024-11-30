//import and execute
import formatStringByWordsLength from "./formatStringByWordsLength.js";

console.log("Ex 08")
console.log("formatStringByWordsLength", formatStringByWordsLength("This is a long, long, long sentence.")) // Expected: THIS IS A LONG, LONG, LONG SENTENCE.
console.log("formatStringByWordsLength", formatStringByWordsLength("This is short")) // Expected: this is short
console.log("formatStringByWordsLength", formatStringByWordsLength("This")) // Expected: this
console.log("formatStringByWordsLength", formatStringByWordsLength("This is not a pretty short one.")) // Expected: THIS IS NOT A PRETTY SHORT ONE.
console.log("formatStringByWordsLength", formatStringByWordsLength("What if it's five words")) // Expected: what if it's five words
console.log("-----------------------------------------")
