import { isHappyNumber } from "../index";

describe('Tests of Exercice 2', () => {

  it('given the number 7, when execute isHappyNumber, then returns true', () => {
    expect(isHappyNumber(7)).toBe(true);
  });

  it('given the number 8, when execute isHappyNumber, then returns false', () => {
    expect(isHappyNumber(8)).toBe(false);
  });

  it('given the number -8, when execute isHappyNumber, then returns false', () => {
    expect(isHappyNumber(-8)).toBe(false);
  });

});