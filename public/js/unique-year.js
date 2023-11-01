export default class Year {
    constructor(year) {
        this.year = year
    }

    toArray() {
        let digits = String(this.year) // turns year to a string
            .split('') // splits into an array of string digits
            .map(Number) // turns each array item into an integer
        return digits;
    }    

    toSetValues(array) {
        let setOfDigits = new Set(array)
        return Array.from(setOfDigits)
    }

    isUnique(uniqueDigits) {
        let isUnique = this.toArray().length == uniqueDigits.length

        return isUnique
    }
}




