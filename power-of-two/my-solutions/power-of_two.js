export function getPowerByTwo(arrayNumbers) {
  //const returnArray = []
  // for (const returnArrayElement of arrayNumbers) {
  // returnArray.push(Math.pow(returnArrayElement, 2))
  // }

  return arrayNumbers.map(element => Math.pow(element, 2))
  // return returnArray
}
