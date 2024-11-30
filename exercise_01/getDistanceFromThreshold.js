/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * Calculates the distance between a value and a threshold.
 * - Returns a positive number if the value is below the threshold.
 * - Returns a negative number if the value exceeds the threshold.
 * 
 * @param {number} value - The number to compare against the threshold.
 * @param {number} threshold - The threshold to compare the value to.
 * @returns {number} - The distance from the value to the threshold.
 */
const getDistanceFromThreshold = function (value, threshold) {
    const result = threshold - value;
  
    return result;
  };
  
export default getDistanceFromThreshold;
