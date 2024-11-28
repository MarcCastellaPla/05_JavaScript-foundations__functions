/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 *  Calculates the distance between a value and a threshold.
 * @param {number} value
 * @param {number} threshold
 * @returns number
 */
const getDistanceFromThreshold = function (value, threshold) {
    const result = threshold - value;
  
    return result;
  };
  
  export default getDistanceFromThreshold;
  