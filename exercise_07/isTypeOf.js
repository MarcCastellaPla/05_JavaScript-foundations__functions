/**
 * #7 :: Export JS function "isTypeOf" to check if type of value matches type received as argument
 * input: any (value)
 * input: 'string' | 'number' | 'boolean' | 'array' (type)
 * output: boolean
 */

/**
 * hint 👉 array should be treated in a different way. Use Array.isArray() to check it
 * docu 👉 https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 */

// Comprovar si el valor que li passas com a argument es del tipus que tu li demanes
// Exemple: validate('data', number) (Si es un numero tornara True sino False)

/**
 * Check a pair of numbers and return true if their sum is 50 or greater than 50
 * @param {'string' | 'number' | 'boolean' | 'array' } value
 * @param {boolean} type
 * 
 * @returns boolean
 */
const checkCollectionHasElements = function (collection) {
    return collection.length > 0;
}
  
  export default checkCollectionHasElements;
  
