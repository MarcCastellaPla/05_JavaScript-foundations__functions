/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */

/**
 * Check whether one number is greater than a given number
 * @param {number} value
 * @param {number} threshold
 * @returns bool
 */
const isGreaterThan = function (value, threshold) {
    const result = value - threshold;
    
    if (result > 0) {
        return true;
    }

    return false;
  };
  
  export default isGreaterThan;
  