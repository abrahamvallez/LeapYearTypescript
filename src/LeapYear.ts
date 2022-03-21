
export const isLeapYear = (year: number): boolean => {
    if(year == 400 || year == 2000) {
        return true
    }
    return false
}
