// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => [...arr].splice(0,2);
const returnLastTwoDrivers = (arr) => [...arr].splice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(multiplier) {
    return function (fare) {
        return multiplier*fare
    }
}
const fareDoubler = (fare) => createFareMultiplier(2)(fare)

const fareTripler = (fare) => createFareMultiplier(3)(fare)

const selectDifferentDrivers = (arraryOfDrivers, func) => {
    return func(arraryOfDrivers)
}