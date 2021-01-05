import { getConcatenatedArrays } from './flat-forof'
import { getSpreadConcatenatedArrays } from './flat-spread'

describe('Concatenated arrays', () => {
  it('should return a empty array', () => {
    const concatArray = []

    let actual = getConcatenatedArrays(concatArray)
    expect(actual).toEqual([])
  })

  it('should return a full array', () => {
    const concatArray = [1, 2, 3, 4]

    let actual = getConcatenatedArrays(concatArray)
    expect(actual).toEqual([1, 2, 3, 4])
  })

  it('should return 2 arrays concatenated', () => {
    const concatArray = [1, 2, 3, 4]
    const concatArray2 = [5, 6, 7, 8]

    let actual = getConcatenatedArrays(concatArray, concatArray2)
    expect(actual).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('should return 2 arrays using spread method', () => {
    const concatArray = [1, 2, 3, 4]
    const concatArray2 = [5, 6, 7, 8]

    let actual = getSpreadConcatenatedArrays(...concatArray, ...concatArray2)
    expect(actual).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('should return 3 arrays using spread method', () => {
    const concatArray = [1, 2, 3, 4]
    const concatArray2 = [5, 6, 7, 8]
    const concatArray3 = [9, 10, 11, 12]

    let actual = getSpreadConcatenatedArrays(...concatArray, ...concatArray2, ...concatArray3)
    expect(actual).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  })
})
