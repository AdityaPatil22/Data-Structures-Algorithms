/**
 * Backtracking is:
 * Try → Explore → Undo → Try something else
 * You build a solution step by step, and when a path doesn’t work, you go back and change choices.
 */

/**
 * The Core Idea (Very Important)
 * At every step, you:
 * Choose an option
 * Explore further (recursive call)
 * Un-choose (backtrack)
 */

// Generic Backtracking Template (MEMORIZE)
function backtrack(path, options) {
    if (baseCase) {
      result.push([...path]);
      return;
    }
  
    for (let choice of options) {
      // choose
      path.push(choice);
  
      // explore
      backtrack(path, newOptions);
  
      // un-choose
      path.pop();
    }
  }
  

// Example: N-Queens Problem
function solveNQueens(n) {
  let board = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let result = [];
  function backtrack(row) {
    if (row === n) {
      result.push(board.map(row => row.join(' ')));
      return;
    }
  }
}

solveNQueens(4);
console.log(result);