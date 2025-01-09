/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 * Check whether one number is greater than a given number.
 * @param {number} value - The value to compare.
 * @param {number} threshold - The threshold to compare against.
 * @returns {boolean} True if value is greater than threshold, otherwise false.
 */
const isGreaterThan = function (value, threshold) {
    return value > threshold;
  };
  
export default isGreaterThan;
  