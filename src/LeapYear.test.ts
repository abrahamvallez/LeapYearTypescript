import { isLeapYear } from './LeapYear'

describe('isLeapYear should', () => {
  it('return true if 400 is passed', () => {
    expect(isLeapYear(400)).toBe(true)
  })

  it('return false if 1 is passed', () => {
    expect(isLeapYear(1)).toBe(false)
  })
  
})
