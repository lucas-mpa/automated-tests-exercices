import React from 'react';

interface IProps {
  input: number
}

export const recursivePotenciation: any = (input: number) => {
  let narr: any = (input + '').split(''), sum = 0
  for (let i = 0;i < narr.length; i++) {
    sum = narr[i] * narr[i] + sum
  }

  return isHappyNumber(sum)
}

export const isHappyNumber: any = (input: number) =>  {
  if (input === 1 || input === 7) {
    return true
  }
  if (input < 10 || input < 1) {
    return false
  }

  return recursivePotenciation(input)
};

const HappyNumbers: React.FC<IProps> = props => {
  const { input } = props
  return (
    <>
    Ex_02
    <br/>
    {`O número ${input} é feliz? ${isHappyNumber(input) ? 'Verdadeiro' : 'Falso'}`}
    </>
  )
}

const Ex02: React.FC = () => {  
  return (
    <div className="App">
      <HappyNumbers input={-7}/>
    </div>
  );
}

export default Ex02;