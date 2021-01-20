export default class verse {
  constructor() {}

  bottleCases(verse) {
    switch (verse) {
      case 0:
        return (
          'No more bottles of beer on the wall, no more bottles of beer.\n' +
          'Go to the store and buy some more, 99 bottles of beer on the wall.'
        )

        break
      case 1:
        return (
          '1 bottle of beer on the wall, 1 bottle of beer.\n' +
          'Take it down and pass it around, no more bottles of beer on the wall.'
        )
        break
      case 2:
        return (
          '2 bottles of beer on the wall, 2 bottles of beer.\n' +
          'Take one down and pass it around, 1 bottle of beer on the wall.'
        )
        break
      default:
        return `${verse} bottles of beer on the wall, ${verse} bottles of beer.
Take one down and pass it around, ${verse - 1} bottles of beer on the wall.`
    }
  }

  singAllSongFromVerse(startVerse, endVerse) {
    let song = []
    for (let i = startVerse; i >= endVerse; i--) {
      song = [...song, this.bottleCases(i)]
      song.join('\n')
    }
    return song
  }
}
