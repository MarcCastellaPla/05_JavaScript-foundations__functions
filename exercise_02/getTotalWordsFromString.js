/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * Get the total number of words contained in a given string.
 * @param {string} sentence - The input string from which words will be counted.
 * @returns {number} The total number of words in the string.
 */
const getTotalWordsFromString = function (sentence) {
    const words = sentence.trim().split(/\s+/);

    return words.length;
  };
  
export default getTotalWordsFromString;
  