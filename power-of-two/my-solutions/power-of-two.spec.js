import { getPowerByTwo } from './power-of_two'

describe('Power a number of two', () => {
  it('should return an array with one element', () => {
    const given = []

    const actual = getPowerByTwo(given)

    expect(actual).toEqual([])
  })
  it('should return an array with ', () => {
    const given = [2, 3]

    const actual = getPowerByTwo(given)

    expect(actual).toEqual([4, 9])
  })
})
