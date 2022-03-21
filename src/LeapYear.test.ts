import { isLeapYear } from './LeapYear'

describe('isLeapYear should', () => {
  it.each([[400,2000,1600]])('return true if year is divisible by 400', (year) => {
    expect(isLeapYear(year)).toBe(true)
  })

  it('return false if 1 is passed', () => {
    expect(isLeapYear(1)).toBe(false)
  })

  it('return true if 2008 is passed', () => {
    expect(isLeapYear(2008)).toBe(true)
  })
})
