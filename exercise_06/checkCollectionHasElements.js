/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 * Checks if a collection (array) has elements.
 * @param {Array} collection - The array (collection) to check.
 * @returns {boolean} Returns true if the collection has elements, otherwise false.
 */
const checkCollectionHasElements = function (collection) {
  return collection.length > 0;
}

export default checkCollectionHasElements;
