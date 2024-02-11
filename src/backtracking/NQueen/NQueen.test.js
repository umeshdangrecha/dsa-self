import { nQueen, getPossibleSolutionCount } from './NQueen'

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
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0]
  ]
  expect(nQueen(8)).toEqual(res)
})
