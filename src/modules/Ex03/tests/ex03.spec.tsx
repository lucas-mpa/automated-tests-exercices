import { isCousin, IsThreeOrFiveMultiple, numberedWord } from "../index";

describe('Tests of Exercice 3', () => {
  it('given the number 10, when execute isThreeOrFiveMultiple, then returns true', () => {
    expect(IsThreeOrFiveMultiple(10)).toBe(true);
  });

  it('given the number 9, when execute isThreeOrFiveMultiple, then returns true', () => {
    expect(IsThreeOrFiveMultiple(9)).toBe(true);
  });

  it('given the number 11, when execute isThreeOrFiveMultiple, then returns false', () => {
    expect(IsThreeOrFiveMultiple(11)).toBe(false);
  });

  it('given the number 11, when execute isCousin, then returns true', () => {
    expect(isCousin(11)).toBe(true);
  });

  it('given the number 11, when execute isCousin, then returns 82', () => {
    expect(numberedWord('Lucas')).toEqual(82);
  });
  
})