import { filterEvenNumbers } from './filter-even-numnbers-fori'
import { filterEvenNumbersMap } from './filter-even-numbers-map'

describe('Filtering even numbers from an array', () => {
  it('should return an empty array', () => {
    const given = []

    const actual = filterEvenNumbers(given)

    expect(actual).toEqual([])
  })

  it('should return an array with 1 even elements', () => {
    const given = [2]

    const actual = filterEvenNumbers(given)

    expect(actual).toEqual([2])
  })

  it('should return an array with 2 even element of a short list of  3 elements', () => {
    const given = [1, 2, 4]

    const actual = filterEvenNumbers(given)

    expect(actual).toEqual([2, 4])
  })

  it('should return an array with all the even numbers on the list', () => {
    const given = [1, 2, 4, -2, 6, 7, 8, 10]

    const actual = filterEvenNumbers(given)

    expect(actual).toEqual([2, 4, 6, 8, 10])
  })

  it('should return an array with all the even numbers on the lis using Map', () => {
    const given = [1, 2, 4, -2, 6, 7, 8, 10]

    const actual = filterEvenNumbersMap(given)

    expect(actual).toEqual([2, 4, 6, 8, 10])
  })
})
