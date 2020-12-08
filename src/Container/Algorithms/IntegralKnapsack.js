/**
 * @author Drisya P
 * @since 2020.11.12
 */

/** 
 * @function knapSack
 * @param {integer} n Total number of items availabe
 * @param {integer} W Capacity of the knapsack
 * @param {Array<integer>} w Weight of the each items
 * @param {Array<integer>}  v value of the each items
 * 
 * @description This function finds the dp matrix for the given input.
 * 
 * @returns  Array of object which include row, column, value of the updated
 * cell, visited cell row and colum, added value array index if any.
*/

export default function knapSack(n, W, w, v) {

    let visited = [];
    let dp = [];
    let equation = null;
    let Id = []

    console.log(w)
    /**Initializing the dp matrix */
    for (let i = 0; i <= n; i++) {
        dp[i] = []
        for (let j = 0; j <= W; j++) {
            dp[i][j] = 0
        }
    }

    /**Knapsack algorithm 
     * @var visited is updated by pushing the neccessary info whenever one cell is updated.
    */
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= W; j++) {
            /**Base condition */
            if (i === 0 || j === 0) {

                dp[i][j] = 0;
                equation = "opt [" + i + "][" + j + "] = 0";
                visited.push(createCell(dp[i][j], [i, j], null, null, null, equation));
                Id.push([4, 5])
            }
            /** Item can be fitted in the sack. Take the optimal from the previous and new.*/
            else if (w[i - 1] <= j) {

                dp[i][j] = Math.max(v[i - 1] + dp[i - 1][j - w[i - 1]], dp[i - 1][j]);
                Id.push([6, 7])
                equation = "opt[" + i + "][" + j + "]  =  max( p(O" + (i) + ") + opt[" + (i - 1) + "][ " + j + "- w(O" + (i) + ") ], opt[" + (i - 1) + "][" + j + "] )";

                if (v[i - 1] + dp[i - 1][j - w[i - 1]] > dp[i - 1][j]) {
                    visited.push(createCell(dp[i][j], [i, j], [i - 1, j - w[i - 1]], [i - 1, j], [i - 1, "visit"], equation))
                }
                else {
                    visited.push(createCell(dp[i][j], [i, j], [i - 1, j], [i - 1, j - w[i - 1]], [i - 1, "visit-min"], equation));
                }

            }
            /**Item can't be fitted in the sack. Choose the older options */
            else {
                Id.push([8, 9])
                dp[i][j] = dp[i - 1][j];
                equation = "opt[" + i + "][" + j + "]  =  opt[" + (i - 1) + "][" + j + "]";
                visited.push(createCell(dp[i][j], [i, j], [i - 1, j], null, null, equation));
            }
            console.log(dp[i][j])
        }
    }

    Id.push([12])
    equation = "return opt [ " + n + "][" + W + "]";
    visited.push(createCell(dp[n][W], [n, W], null, null, null, equation));
    return [visited, Id];
}

/**
 * @component dlkf
 * @param {integer} value   value after updation of the current cell
 * @param {Array<integer>} update info (row, col) of the current cell
 * @param {Array<integer>} visit info of the visited cell
 * @param {integer} v index of the value for the item added and the css class.
 * @param {string} equation equation used for the current step
 * 
 * @description makes the object.
 * @returns obect of the passed parameters.
 */
const createCell = (value, update, firstvisit, secondvisit, v, equation) => {
    return {
        value: value,
        update: update,
        firstVisit: firstvisit,
        secondVisit: secondvisit,
        vindex: v,
        equation: equation
    };
};
