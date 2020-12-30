export function getHighestNumber(array) {
  let highestnumber = array[0]

  for (let arrayElement of array) {
    if (highestnumber <= arrayElement) highestnumber = arrayElement
  }
  return highestnumber
}
