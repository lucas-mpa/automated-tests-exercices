import {
    sumMultiples, 
    multiplesThreeAndFive, 
    multiplesThreeOrFiveAndSeven, 
    multiplesThreeOrFive
} from "../index";

describe('Tests of Exercice 1', () => {

    it('given an array between 1 - 10, when execute sumMultiples, then returns 55', () => {
        expect(sumMultiples([1,2,3,4,5,6,7,8,9,10])).toEqual(55);
    });

    it('given an array only including 0, when execute sumMultiples, then return 0', () => {
        expect(sumMultiples([0])).toEqual(0)
    });

    it('given the number 45, when execute multiplesThreeOrFive, then returns [3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27, 30, 33, 35, 36, 39, 40, 42]', () => {
        expect(multiplesThreeOrFive(45)).toEqual([3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27, 30, 33, 35, 36, 39, 40, 42]);
    });

    it('given the number 0, when execute multiplesThreeOrFive, then returns []', () => {
        expect(multiplesThreeOrFive(0)).toEqual([])
    });

    it('given the number 40, when execute multiplesThreeAndFive, then returns [15,30]', () => {
        expect(multiplesThreeAndFive(40)).toEqual([15,30]);
    });

    it('given the number 0, when execute multiplesThreeAndFive, then returns []', () => {
        expect(multiplesThreeAndFive(0)).toEqual([])
    });

    it('given the number 45, when execute multiplesThreeOrFiveAndSeven, then returns [21,35,42]', () => {
        expect(multiplesThreeOrFiveAndSeven(45)).toEqual([21,35, 42]);
    });

    it('given the number 0, when execute multiplesThreeOrFiveAndSeven, then returns []', () => {
        expect(multiplesThreeOrFiveAndSeven(0)).toEqual([])
    });


});