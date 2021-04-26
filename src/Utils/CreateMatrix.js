import { createBlock } from "./CreateBlock"

export function createMatrix(val, Row, Col) {

    let matrix = new Array(Row + 1);
    var twoD = false;
    if (val !== null && val.length !== 0 && val[0].length >= 1) {
        twoD = true;
    }

    for (let row = 0; row <= Row; row++)
        matrix[row] = [];

    for (let row = 0; row <= Row; row++) {

        for (let col = 0; col <= Col; col++) {
            if (!twoD)
                matrix[row][col] = val === [] ? createBlock(null, 'stay') : createBlock(val[col], 'stay');
            else
                matrix[row][col] = createBlock(val[row][col], 'stay');
        }
    };

    return matrix;

}
