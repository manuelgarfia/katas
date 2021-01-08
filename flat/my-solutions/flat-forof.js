export function getConcatenatedArrays(...arrays) {
  let finalArray = []
  for (const arrayElement of arrays) {
    finalArray.push(...arrayElement)
  }
  return finalArray
}
