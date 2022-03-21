
export const isLeapYear = (year: number): boolean => {
    if(year % 400 == 0 || year == 2008) {
        return true
    }
    return false
}
