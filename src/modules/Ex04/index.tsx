import React from 'react';

export const showProducts = (listProducts: any) => {
  return listProducts.map((data: { name: string; price: number; }) => {
    return `${data.name}, ${data.price}`
  })
}

export const verifyItemIsEmpyt = (item: any) => {
  const empytItem = Object.keys(item).length === 0;
  return empytItem
}

const isRepeatedItem = (newItem: any, listOfItems: any) => {
  return listOfItems.find((element: { name: any; }) => element.name === newItem.name);
}

export const addItemToCart = (newItem: any, listOfItems: any) => {
  if(verifyItemIsEmpyt(newItem) === true){
    return listOfItems
  }
  const foundRepeatedItem = isRepeatedItem(newItem, listOfItems)

  if(foundRepeatedItem){
    listOfItems.splice(listOfItems.indexOf(foundRepeatedItem),1)
    foundRepeatedItem.quantity = foundRepeatedItem.quantity + 1
    listOfItems.push(foundRepeatedItem)

    return listOfItems
  }

  listOfItems.push(newItem)

  return listOfItems
}

export const removeItemToCart = (removedItem: any, listOfItems: any) => {
  if(verifyItemIsEmpyt(removedItem) === true){
    return listOfItems
  }

  const foundRepeatedItem = isRepeatedItem(removedItem, listOfItems)

  if(foundRepeatedItem){
    listOfItems.splice(listOfItems.indexOf(foundRepeatedItem),1)

    return listOfItems
  }

  return listOfItems
}

export const subtractItemToCart = (subtractItem: any, listOfItems: any) => {
  const foundRepeatedItem = isRepeatedItem(subtractItem, listOfItems)

  if(subtractItem.quantity <= 1){
    return removeItemToCart(subtractItem, listOfItems);
  }

  if(foundRepeatedItem){
    const indexReducedItem = listOfItems.indexOf(foundRepeatedItem)
    listOfItems[indexReducedItem].quantity = listOfItems[indexReducedItem].quantity - 1
    listOfItems.splice(indexReducedItem,1)
    listOfItems.push(foundRepeatedItem)

    return listOfItems
  }
  
  return listOfItems
}

export const createUser = (userParams: any) => {
  return userParams
}

export const getUser = (user?: string) => {  
  if(user === 'lucas'){
    return {name: 'Lucas Matheus', cep: '60050041'}
  }

  return {name: 'teste', cep: '60310000'}
}

export const sumTotal = (listOfProducts: Array<number>) => {
  if (listOfProducts.length > 0) {
    const sumMultiples = listOfProducts.reduce(
      (previousValue, currentValue) => previousValue + currentValue);

    return sumMultiples;
  }
  return 0
}


export const getShippingPrice = (user: any) => {
  if(user.cep === '60050041'){
    return 59.99
  }

  return 20
}

export const totalProducts = (shoppingCart: any, user?: string) => {
  let allValues: number[] = [];

  shoppingCart.forEach((element: { price: number; quantity: number; }) => {
    allValues.push(element.price * element.quantity);
  });

  if(sumTotal(allValues) < 100){
    return sumTotal(allValues)
  }
  
  return sumTotal(allValues) + getShippingPrice(getUser(user))
}

const ShoppingCart: React.FC = () => {
  return (
    <>
      <br/>
      Ex_04
    </>
  )
}

const Ex04: React.FC = () => {  
  return (
    <div className="App">
      <ShoppingCart />
    </div>
  );
}

export default Ex04;