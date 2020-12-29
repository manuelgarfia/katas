import { getNumbers } from './forof-add-all-numbers'


describe( 'forof-add-all-numbers', ()=>{
  it('should return all the numbers with a for-of Loop', ()=> {

    // given
    const given =[1,2,3,4,5]
    //When
    const actual= getNumbers(given)

    // Then
    expect (actual).toBe(15)


  })
})
