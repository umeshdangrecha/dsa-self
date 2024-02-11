import { printAllSubsets } from './AllSubset'

describe('Print All Subsets', () => {
  test('Print All Subsets', () => {
    const res = [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
    expect(printAllSubsets([1, 2, 3])).toEqual(res)
  })
})
