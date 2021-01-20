import verse from './99-bottles-main.js'

describe('99 bottles of beer', () => {
  it('should return the last verse', () => {
    const given = new verse(0)

    const actual = given.especialBottleCases()

    expect(actual).toBe(
      'No more bottles of beer on the wall, no more bottles of beer.\n' +
        'Go to the store and buy some more, 99 bottles of beer on the wall.'
    )
  })

  it('should return the last verse with a specialBottleCases', () => {
    const given = new verse(0)

    const actual = given.especialBottleCases()

    expect(actual).toBe(
      'No more bottles of beer on the wall, no more bottles of beer.\n' +
        'Go to the store and buy some more, 99 bottles of beer on the wall.'
    )
  })

  it('should return the penultimate verse', () => {
    const given = new verse()

    const actual = given.BottleCases(1)

    expect(actual).toBe(
      '1 bottle of beer on the wall, 1 bottle of beer.\n' +
        'Take it down and pass it around, no more bottles of beer on the wall.'
    )
  })

  it('should return the last antepenultimate', () => {
    const given = new verse(2)

    const actual = given.especialBottleCases()

    expect(actual).toBe(
      '2 bottles of beer on the wall, 2 bottles of beer.\n' +
        'Take one down and pass it around, 1 bottle of beer on the wall.'
    )
  })

  it('should return one particular verse since a certain number', () => {
    const given = new verse()

    const actual = given.BottleCases(5)

    expect(actual).toBe(
      '5 bottles of beer on the wall, 5 bottles of beer.\n' +
        'Take one down and pass it around, 4 bottles of beer on the wall.'
    )
  })

  it('should return several verses from a certain verse ', () => {
    const given = new verse()
    const final = 0
    const actual = given.singAllSongFromVerse(3, final)

    expect(actual).toEqual([
      '3 bottles of beer on the wall, 3 bottles of beer.\n' +
        'Take one down and pass it around, 2 bottles of beer on the wall.',
      '2 bottles of beer on the wall, 2 bottles of beer.\n' +
        'Take one down and pass it around, 1 bottle of beer on the wall.',
      '1 bottle of beer on the wall, 1 bottle of beer.\n' +
        'Take it down and pass it around, no more bottles of beer on the wall.',
      'No more bottles of beer on the wall, no more bottles of beer.\n' +
        'Go to the store and buy some more, 99 bottles of beer on the wall.'
    ])
  })

  it('should return several verses from an initial verse to a final verse', () => {
    const given = new verse()
    const finalVerse = 3
    const initialVerse = 3
    const actual = given.singAllSongFromVerse(initialVerse, finalVerse)

    expect(actual).toEqual([
      '3 bottles of beer on the wall, 3 bottles of beer.\n' +
        'Take one down and pass it around, 2 bottles of beer on the wall.'
    ])
  })
  it('should return last element', () => {
    const given = new verse()
    const finalVerse = 0
    const initialVerse = 0
    const actual = given.singAllSongFromVerse(initialVerse, finalVerse)

    expect(actual).toEqual([
      'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.'
    ])
  })
})
