export function getPowerByTwo(arrayNumbers) {
  const returnArray = []
  for (const returnArrayElement of arrayNumbers) {
    returnArray.push(Math.pow(returnArrayElement, 2))
  }
  return returnArray
}
