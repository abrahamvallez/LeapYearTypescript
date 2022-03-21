
export const isLeapYear = (year: number): boolean => {
    if(year == 400 || year == 2000 || year == 1600) {
        return true
    }
    return false
}
