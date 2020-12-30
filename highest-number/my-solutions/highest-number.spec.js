import { getHighestNumber } from './highest-number'


describe("highest number", ()=>{
  it('should return the only element of an array',()=>{

    const given=[1]

    let actual= getHighestNumber(given)

    expect(actual).toBe(1)
  })

  it('should return the highest number of an array of two elements',()=>{

    const given=[1,1]

    let actual= getHighestNumber(given)

    expect(actual).toBe(1)
  })
  it('should return the highest number of an array of several  elements',()=>{

    const given=[1,2, 32, 64, 223, 3, 2330, 1114, 2062,2330]

    let actual= getHighestNumber(given)

    expect(actual).toBe(2330)
  })


})
