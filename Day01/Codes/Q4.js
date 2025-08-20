//Scale matrix

function scaleMatrix(matrix, scalar) {
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            result[i][j] = matrix[i][j] * scalar; 
        }
    }

    return result;
}

let A = [
    [1, 2],
    [3, 4]
];
let k = 3;

console.log(scaleMatrix(A, k));