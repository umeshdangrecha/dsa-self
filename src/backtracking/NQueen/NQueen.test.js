import { nQueen, nQueenPossibleSols } from './NQueen'

test('4 - NQueen Problem', () => {
  const res = [
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 0, 1, 0]
  ]
  expect(nQueen(4)).toEqual(res)
})

test('8 - NQueen Problem', () => {
  const res = [
    [1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0]
  ]
  expect(nQueen(8)).toEqual(res)
})

test('8 - NQueen Problem possible solvs', () => {
  // const res = [
  //   [1, 3, 6, 8, 7, 4, 2, 5],
  //   [2, 1, 6, 8, 7, 3, 5, 4],
  //   [3, 1, 6, 8, 2, 7, 5, 4],
  //   [4, 1, 5, 8, 2, 7, 3, 6],
  //   [5, 1, 3, 6, 8, 7, 2, 4],
  //   [6, 1, 3, 7, 2, 8, 5, 4],
  //   [7, 1, 3, 5, 8, 2, 4, 6]
  // ]
  const res = [
    [1, 5, 8, 6, 3, 7, 2, 4],
    [2, 4, 6, 8, 3, 1, 7, 5],
    [3, 1, 7, 5, 8, 2, 4, 6],
    [4, 1, 5, 8, 2, 7, 3, 6],
    [5, 1, 4, 6, 8, 2, 7, 3],
    [6, 1, 5, 2, 8, 3, 7, 4],
    [7, 1, 3, 8, 6, 4, 2, 5],
    [8, 2, 4, 1, 7, 5, 3, 6]
  ]
  expect(nQueenPossibleSols(8)).toEqual(res)
})

test('4 - NQueen Problem possible solvs', () => {
  const res = [
    [2, 4, 1, 3],
    [3, 1, 4, 2]
  ]
  expect(nQueenPossibleSols(4)).toEqual(res)
})
