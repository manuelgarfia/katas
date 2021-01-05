export function getConcatenatedArrays(array1, array2) {
  let finalArray = [...array1]
  for (const arrayElement of array2) {
    finalArray.push(arrayElement)
  }
  return finalArray
}
