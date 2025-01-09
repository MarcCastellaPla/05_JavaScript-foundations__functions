/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */

import checkCollectionHasElements from "../exercise_06/checkCollectionHasElements.js";


/**
 * Transforms an array into a string.
 * - If the array has elements, it returns the elements joined by '|' (pipe character).
 * - Otherwise, it returns an empty string.
 * @param {Array} collection - The array (collection) to be transformed into a string.
 * @returns {string} The resulting string or an empty string if the array is empty.
 */
const transformCollectionToString = function (collection) {
   const hasElements = checkCollectionHasElements(collection)
   
   if (hasElements) {
      return collection.join(' | ');
   }

   return "";
};

export default transformCollectionToString;
