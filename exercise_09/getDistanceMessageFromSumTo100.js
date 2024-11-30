/** 
 * #9 :: Export JS function "getDistanceMessageFromSumTo100" to generate a random number (in between 0-100) and sum it to given number
  - if sum result exceeds 100, then return message "Sum with value N exceeds in N from number 100"
  - otherwise, return message "Sum with value N is left in N from number 100"
 * input: number (value) 
 * output: string
 */

/**
 * CASE #1
 * input: 70
 * random (generated in function): 40
 * output: "Sum with value 110 exceeds in 10 from number 100"
 */

/**
 * CASE #2
 * input: 30
 * random (generated in function): 40
 * output: "Sum with value 70 isd left in 30 from number 100"
 */
import getDistanceFromThreshold from '../exercise_01/getDistanceFromThreshold.js';
import generateRandomNumberInRange from "../exercise_03/generateRandomNumberInRange.js";


/**
 * Generates a message based on the sum of a given number and a random number between 0 and 100.
 * If the sum exceeds 100, it returns a message indicating by how much it exceeds.
 * Otherwise, it returns a message indicating how much is left to reach 100.
 * @param {number} value - The number to be summed with a randomly generated number.
 * @returns {string} The message indicating the distance from the threshold of 100.
 */
const getDistanceMessageFromSumTo100 = function (value, random = generateRandomNumberInRange(100)) {
    const sumNumber = value + random;
    const distanceFromThreshold = getDistanceFromThreshold(sumNumber, 100)
    const absoluteDistance = Math.abs(distanceFromThreshold);

    if (distanceFromThreshold < 0) {
        return (`Sum with value ${sumNumber} exceeds in ${absoluteDistance} from number 100`)
    }

    return (`Sum with value ${sumNumber} is left in ${absoluteDistance} from number 100`);
 };

export default getDistanceMessageFromSumTo100;
