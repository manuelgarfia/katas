import { validBraces } from './prueba-codewars'

describe('solution', () => {
  it('Should handle the basic test', () => {
    const given: string = '[(])'
    let actual: boolean = validBraces(given)
    expect(actual).toBeFalsy()
  })
})
