import Year from '../../public/js/unique-year'
describe('tests', () => {
    describe('control test with boolean', () => {
        test('true is true', () => {
            expect(true).toBe(true)
        });
    });

    describe('toArray method', () => {
        test('returns array of digits for given year', () => {
            const yearToCheck = new Year(1984);
            expect(yearToCheck.toArray()).toEqual([1, 9, 8, 4]);
        })
    })

    describe('toSetValues method', () => {
        test('returns set of digits for given array of digits', () => {
            const yearToCheck = new Year(19844);
            const array = yearToCheck.toArray();
            expect(yearToCheck.toSetValues(array)).toEqual([1, 9, 8, 4]);
        })
    })
    describe('isUnique method', () => {
        test('the year is unique when no digits are repeated', () => {
            const yearToCheck = new Year(1984)
            const originalYearArray = yearToCheck.toArray();
            const setValuesArray = yearToCheck.toSetValues(originalYearArray)

            expect(yearToCheck.isUnique(originalYearArray, setValuesArray)).toBe(true);
        });
        test('the year is unique when no digits are repeated', () => {
            const yearToCheck = new Year(1988)
            const originalYearArray = yearToCheck.toArray();
            const setValuesArray = yearToCheck.toSetValues(originalYearArray)

            expect(yearToCheck.isUnique(originalYearArray, setValuesArray)).toBe(false);
        });
    });
});
