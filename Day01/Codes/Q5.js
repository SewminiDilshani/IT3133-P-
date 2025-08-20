//Multiply two matrises

function multiplyMatrices(A, B) {
    let rowsA = A.length,
        colsA = A[0].length,
        rowsB = B.length,
        colsB = B[0].length;

    if (colsA !== rowsB) {
        throw new Error("Matrix multiplication not possible: columns of A must equal rows of B");
    }

    let result = Array.from({ length: rowsA }, () => Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < colsB; j++) {
            for (let k = 0; k < colsA; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}

let A = [
    [1, 2, 3],
    [4, 5, 6]
];
let B = [
    [7, 8],
    [9, 10],
    [11, 12]
];

console.log(multiplyMatrices(A, B));
