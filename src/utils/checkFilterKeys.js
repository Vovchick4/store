export function checkFilterKeys(array, value) {
    if (array.hasOwnProperty("brandFilter") && !array.hasOwnProperty("qualityFilter")) {
        return array["brandFilter"].includes(value)
    } else if (array.hasOwnProperty("qualityFilter") && !array.hasOwnProperty("brandFilter")) {
        return array["qualityFilter"].includes(value)
    } else if (array.hasOwnProperty("brandFilter") && array.hasOwnProperty("qualityFilter")) {
        return array["brandFilter"].includes(value) || array["qualityFilter"].includes(value)
    }
}