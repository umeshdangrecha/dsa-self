const isSafe = (board, row, col, N) => {
  // check row
  for (let i = 0; i < col; i++) {
    if (board[row][i] === 1) {
      return false
    }
  }
  // check column
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 1) {
      return false
    }
  }

  // check if there is a queen in the upper left diagonal
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 1) {
      return false
    }
  }
  // check diagonals left bottom
  for (let i = row, j = col; i < N && j >= 0; i++, j--) {
    if (board[i][j] === 1) {
      return false
    }
  }
  return true
}

const util = (N, row, board) => {
  if (row === N) {
    return true
  }

  for (let col = 0; col < N; col++) {
    if (isSafe(board, row, col, N)) {
      board[row][col] = 1
      if (util(N, row + 1, board)) {
        return true
      }
      board[row][col] = 0
    }
  }
  return false
}
export function nQueen(N) {
  const board = Array.from({ length: N }, () => Array(N).fill(0))

  util(N, 0, board)
  return board
}
