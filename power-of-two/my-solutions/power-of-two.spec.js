import { getPowerByTwo } from './power-of_two'

describe('Power a number of two', () => {
  it('should return an array with one element', () => {
    const given = []

    const actual = getPowerByTwo(given)

    expect(actual).toEqual([])
  })

  it('should return an array with 2 elements', () => {
    const given = [2, 3]

    const actual = getPowerByTwo(given)

    expect(actual).toEqual([4, 9])
  })

  it('should return an array with 3 or more elements', () => {
    const given = [2, 3, 5, 6, 7]

    const actual = getPowerByTwo(given)

    expect(actual).toEqual([4, 9, 25, 36, 49])
  })
})
