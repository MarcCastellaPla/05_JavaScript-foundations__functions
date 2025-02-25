/**
 * #5 :: Export JS function "isAdditionGreaterThanFifty" to check a pair of numbers and return true if their sum is 50 or greater than 50
 * input: number (summand1)
 * input: number (summand2)
 * output: boolean
 */

/**
 * Check a pair of numbers and return true if their sum is 50 or greater than 50.
 * @param {number} summand1 - The first number to add.
 * @param {number} summand2 - The second number to add.
 * @returns {boolean} True if the sum is 50 or greater, otherwise false.
 */
const isAdditionGreaterThanFifty = function (summand1, summand2) {

    const threshold = 50;

    return (summand1 + summand2) >= threshold;
  };
  
export default isAdditionGreaterThanFifty;
