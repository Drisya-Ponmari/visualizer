
/**
 * @function
 * @param {integer} value  value of a matrix block
 * @description Block of each matrix is created.
 * @see IntegralKnapsackVisualizer
 */

export function createBlock(value, role) {
    return {
        value: value,
        role: role
    }
}