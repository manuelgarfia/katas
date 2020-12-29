import { getNumbersredu } from './reduce.add-all-numbers'



describe( 'reduce.add-all-numbers', ()=>{
  it('should return all the numbers with the reduce function', ()=> {

    // given
    const given =[1,2,3,4,5]
    //When
    const actual= getNumbersredu(given)

    // Then
    expect (actual).toBe(15)


  })
})
