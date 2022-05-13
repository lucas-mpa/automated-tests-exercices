
import React from 'react';
import { IProps } from './interface';

export const sumMultiples = (multiples: Array<number>) => {
  if (multiples.length > 0) {
    const sumMultiples = multiples.reduce(
      (previousValue, currentValue) => previousValue + currentValue);

    return sumMultiples;
  }
  return 0
}

export const multiplesThreeOrFive = (maxNumber: number) => {
  const allMultiples = [];
  for (let i = 1; i < maxNumber; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      allMultiples.push(i)
    }
  }
  return allMultiples;
}


export const multiplesThreeAndFive = (maxNumber: number) => {
  const allMultiples = [];
  for (let i = 1; i < maxNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      allMultiples.push(i)
    }
  }
  return allMultiples;
}

export const multiplesThreeOrFiveAndSeven = (maxNumber: number) => {
  const allMultiples = [];
  for (let i = 1; i < maxNumber; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && i % 7 === 0) {
      allMultiples.push(i)
    }
  }
  return allMultiples;
}

const AllMultiples: React.FC<IProps> = props => {
  const { maxNumber } = props

  const allSums = {
    threeOrFive: 0,
    threeAndFive: 0,
    threeOrFiveAndSeven: 0,
  }

  allSums.threeOrFive = sumMultiples(multiplesThreeOrFive(maxNumber))
  allSums.threeAndFive = sumMultiples(multiplesThreeAndFive(maxNumber))
  allSums.threeOrFiveAndSeven = sumMultiples(multiplesThreeOrFiveAndSeven(maxNumber))

  return (
    <>
      <span> {`A soma de todos os múltiplos de 3 ou 5, menores que ${maxNumber} 
        é igual a: ${allSums.threeOrFive}`}</span>
      <span> {`A soma de todos os  múltiplos de 3 e 5, menores que ${maxNumber} 
        é igual a: ${allSums.threeAndFive}`}</span>
      <span> {`A soma de todos os múltiplos de (3 ou 5) e 7, menores que ${maxNumber} 
        é igual a: ${allSums.threeOrFiveAndSeven}`}</span>
    </>
  )
}

function Ex01() {  
  return (
    <div className="App">
      Ex_01
      <AllMultiples maxNumber={10} />
      <br/>
    </div>
  );
}

export default Ex01;
