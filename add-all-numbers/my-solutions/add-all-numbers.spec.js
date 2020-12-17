import {getAllNumbers} from './add-all-numbers'

describe('addAllNumbers',()=>{
  it('should add all numbers ',()=>{

    //Given (donde se hace la preparacion del test)
    const given =[1,2,3,4,5]

    //When(cuando se ejecuta la logica )
    const actual = getAllNumbers(given)

    //Then (es donde se hace la comparación, el test en sí)
    expect(actual).toBe(15)

  })

  it('should add all different numners ',()=>{

    //Given (donde se hace la preparacion del test)
    const given =[1,2,3,4,5,6]

    //When(cuando se ejecuta la logica )
    const actual = getAllNumbers(given)

    //Then (es donde se hace la comparación, el test en sí)
    expect(actual).toBe(21)

  })
})