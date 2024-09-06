
const matrixA = [
  [1, 0],
  [0, 1],
];
const matrixB = [
  [1, 2],
  [3, 4],
];

const multipleSquareMatrices = (matrix1, matrix2) => {
  const dimensionOfOne = {
    height: matrix1.length,
    width: matrix1[0].length,
  };
  const dimensionOfTwo = {
    height: matrix2.length,
    width: matrix2[0].length,
  };
  // check compatibility
  if (dimensionOfOne.height !== dimensionOfTwo.width) {
    return console.error('Not Compatible', dimensionOfOne.height, dimensionOfTwo.width);
  }

  const resultDimensions = { height: dimensionOfOne.height, width: dimensionOfTwo.width };

  const resultMatrix = [];

  for (let row = 0; row !== resultDimensions.height; row += 1) {
    const resultRow = [];
    for (let col = 0; col !== resultDimensions.width; col += 1) {
      const matrix1Row = matrix1[row];
      let dotProduct = 0;
      // eslint-disable-next-line no-restricted-syntax
      for (const [i, rowNum] of matrix1Row.entries()) {
        const colNum = matrix2[i][col];
        dotProduct += rowNum * colNum;
      }
      resultRow.push(dotProduct);
    }
    resultMatrix.push(resultRow);
  }
  return resultMatrix;
};

multipleSquareMatrices(matrixA, matrixB);

