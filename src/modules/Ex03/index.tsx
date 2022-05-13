import React from 'react';
import { sumMultiples } from '../Ex01';
import { isHappyNumber } from '../Ex02';

export const unicodeEnumeration = (letter: string) => {
  if(letter === letter.toUpperCase()){
    return 39
  } 
  return 97
}

export const isCousin = (num: number) => {
  for (let i = 2; i < num; i++){
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

export const numberedWord = (input: string) => {
  var numberedLetters: number[] = [];
  input.split('').map(function (letter) {
    return numberedLetters.push((letter.charCodeAt(0) - unicodeEnumeration(letter)) + 1);
  });
  return sumMultiples(numberedLetters);
}

export const IsThreeOrFiveMultiple = (input: number) => {
  if(input % 3 === 0 || input % 5 === 0){
    return true;
  }
  return false;
}

const WordsInNumbers: React.FC<any> = (word: string) => {
  const verifications = {
    isCousin: isCousin(numberedWord(word)),
    isMultipleThreeOrFive: IsThreeOrFiveMultiple(numberedWord(word)),
    isHappyNumber: isHappyNumber(numberedWord(word)),
  }

  return(
    <>
      <span>
        {`A entrada '${word}' se converte em um número múltiplo de 3 ou 5? ${verifications.isMultipleThreeOrFive ? 'Verdadeiro' : 'Falso' }`}
      </span>

      <span>
        {`A entrada '${word}' se converte em um número primo? ${verifications.isCousin ? 'Verdadeiro' : 'Falso' }`}
      </span>

      <span>
        {`A entrada '${word}' se converte em um número feliz? ${verifications.isHappyNumber ? 'Verdadeiro' : 'Falso' }`}
      </span>
    </>
  ) 
}

const Ex03: React.FC = () => {
  return (
    <div className='App'>
      <>
        <br />
        Ex_03
        <br />
        {WordsInNumbers("j")}
      </>
    </div>
  )
}

export default Ex03;