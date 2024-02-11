import { isSumStr } from './sum-string'

describe('Backtracking / Sum String ', () => {
  test('it should work', () => {
    expect(isSumStr('1212243660')).toBe(true)
    expect(isSumStr('123456787')).toBe(false)
  })
})
