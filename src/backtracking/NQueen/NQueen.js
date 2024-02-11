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
  // check if there is a queen in the upper right diagonal
  for (let i = row, j = col; i >= 0 && j < N; i--, j++) {
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

const util = (N, row, board, start = 0) => {
  if (row === N) {
    return true
  }
  const r = row === 0 ? start : 0
  for (let col = r; col < N; col++) {
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

const getStart = (board, N) => {
  let start = 0

  for (let i = 0; i < N; i++) {
    if (board[0][i] === 1) {
      start = i + 1
    }
  }
  return start
}

const getAns = (board, N) => {
  let start = []

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 1) {
        start.push(j + 1)
      }
    }
  }
  return start
}

export function nQueenPossibleSols(N) {
  let board = Array.from({ length: N }, () => Array(N).fill(0))
  let s = []
  let start = 0
  for (let i = 0; i < N; i++) {
    if (util(N, 0, board, start)) {
      s.push(getAns(board, N))
      start = getStart(board, N)
      board = Array.from({ length: N }, () => Array(N).fill(0))
    }
  }
  return s
}
