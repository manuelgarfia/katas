export function filterEvenNumbersMap(numbers) {
  const evenNumbersArray = []
  numbers.map(elementNumber => {
    if (elementNumber % 2 === 0 && elementNumber >= 0) evenNumbersArray.push(elementNumber)
  })
  return evenNumbersArray
}
