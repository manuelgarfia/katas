import{isfizz} from './buzz'

export function fizzBuzz(number){

let arrayFizzBuzz= []


  //if (number===1) return arrayFizzBuzz.push(1)

  for (let i = 1; i <= number; i++) {

    arrayFizzBuzz.push(isfizz(i))

  }
 return arrayFizzBuzz
}

