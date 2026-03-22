/* 
 * Matrix traversal = visiting every cell in a 2D grid in a specific order while respecting boundaries.
 * Think of a matrix as:
 * rows → i
 * columns → j
*/

// Basic Matrix Traversal (Row-wise)
// Left → Right, Top → Bottom
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      console.log(matrix[i][j]);
    }
}

// Column-wise Traversal
for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i][j]);
    }
  }

// Diagonal Traversal
for (let d = 0; d < matrix.length + matrix[0].length - 1; d++) {
    for (let i = 0; i < matrix.length; i++) {
      let j = d - i;
      if (j >= 0 && j < matrix[0].length) {
        console.log(matrix[i][j]);
      }
    }
  }