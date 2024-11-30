/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */

/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**
 * CASE #2 * input: "This is short one."
 * output: "this is short one."
 */
import getTotalWordsFromString from '../exercise_02/getTotalWordsFromString.js';

/**
 * Converts the case of a given string based on the number of words in it.
 * If the total number of words is greater than 5, returns the string in uppercase.
 * Otherwise, returns the string in lowercase.
 * @param {string} sentence - The string whose number of words will be checked.
 * @returns {string} The formatted string in either uppercase or lowercase.
 */
const formatStringByWordsLength = function (sentence) {
   let totalWords = getTotalWordsFromString(sentence)
   
   if (totalWords > 5) {
     return sentence.toUpperCase();
   }

   return sentence.toLowerCase();
};
 
export default formatStringByWordsLength;
