import { isLeapYear } from './LeapYear'

describe('isLeapYear should', () => {
  it.each([[400,2000,1600]])('return true if year is divisible by 400', (year) => {
    expect(isLeapYear(year)).toBe(true)
  })

  it.each([[2008,2012,2016]])('return true if year is divisible by 4 but not by 100', () => {
    expect(isLeapYear(2008)).toBe(true)
  })

  it.each([[1,1700,1800,1900,2100, 2017, 2018, 2019]])('return false another cases', () => {
    expect(isLeapYear(1)).toBe(false)
  })
})
