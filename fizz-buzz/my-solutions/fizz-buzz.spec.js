import { fizzBuzz } from './fizz-buzz'


describe('fizzBuzz',()=>{
  it('Should order 1 number',()=>{

    const given=1

    const actual= fizzBuzz(given)

    expect(actual).toEqual([1])
  })


  it('Should give 1, 2 and fizz',()=>{

    const given=3

    const actual= fizzBuzz(given)

    expect(actual).toEqual([1,2,'fizz'])
  })

  it('Should return 1, 2, fizz, 4 , buzz',()=>{

    const given=5

    const actual= fizzBuzz(given)

    expect(actual).toEqual([1,2,'fizz',4,'buzz'])
  })


  it('Should return correctly all the  numbers and fizz and buzz till 15 that must be fizzbuzz',()=>{

    const given=15

    const actual= fizzBuzz(given)

    expect(actual).toEqual([1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz'])
  })



})

