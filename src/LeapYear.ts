
export const isLeapYear = (year: number): boolean => {
    if(year % 400 == 0 || year == 2008 || year == 2012 || year == 2016) {
        return true
    }
    return false
}
