export function  getNumbers(given){
let  allNumbers=0
  for (const givenElement of given) {
    allNumbers += givenElement
  }
  return allNumbers
}
