export function filterEvenNumbers(numbers) {
  const evenNumbersArray = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0 && numbers[i] >= 0) evenNumbersArray.push(numbers[i])
  }
  return evenNumbersArray
}
