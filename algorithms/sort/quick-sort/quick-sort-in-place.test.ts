import { quickSortInPlace } from './quick-sort-in-place';

describe('Quick sort (in place)', () => {

    test('sort number array', () => {
        const array = [20, 12, 3, 53, 13, 1, 14, 8, 2, 19];
        const sortedArray = [1, 2, 3, 8, 12, 13, 14, 19, 20, 53];

        expect(quickSortInPlace(array)).toEqual(sortedArray);
    });

    test('sort string array', () => {
        const array = ['test', 'cat', 'do', 'abc', 'a', 'dod', 'ab', 'tst'];
        const sortedArray = ['a', 'ab', 'abc', 'cat', 'do', 'dod', 'test', 'tst'];

        expect(quickSortInPlace(array)).toEqual(sortedArray);
    });

});