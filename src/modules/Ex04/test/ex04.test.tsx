import {addItemToCart, createUser, getUser, removeItemToCart, showProducts, subtractItemToCart, totalProducts} from "../index";

describe('Tests of Exercice 4 - User', () => {
  it(`given a user params, when executes createUser, then returns a array of user params, equals to {name: 'lucas', cep: '60050041'}`, () => {
    const mockedUser = {name: 'lucas', cep: '60050041'}
    expect(createUser(mockedUser)).toEqual({name: 'lucas', cep: '60050041'});
  })
})

describe('Tests of Exercice 4 - ShoppingCart', () => {
  it(`given a array with 3 objects, when executes showProducts, then returns a array with name and price of each element, equal to ["arroz, 3.5", "feijão, 4", "leite, 4.5"]`, () => {
    const mockProducts = [
      {name: "arroz", price: 3.50},
      {name: "feijão", price: 4},
      {name: "leite", price: 4.50},
    ]
    
    expect(showProducts(mockProducts)).toEqual(["arroz, 3.5", "feijão, 4", "leite, 4.5"]);
  })

  it('given a empty array, when executes showProducts, then returns a empyt array', () => {
    const mockProducts: never[] = []
    expect(showProducts(mockProducts)).toEqual([]);
  })

  it(`given a new item, when running addItemToCart, then returns a array with all the items incluided the new item, being equal to [{name: 'feijão', price: 10, quantity: 4}, {name: 'arroz', price: 30, quantity: 2}]`, () => {
    const newItem = {name: 'arroz', price: 30, quantity: 2} 
    const shoppingCart = [{name: 'feijão', price: 10, quantity: 4}]
    
    expect(addItemToCart(newItem, shoppingCart)).toEqual([{name: 'feijão', price: 10, quantity: 4}, {name: 'arroz', price: 30, quantity: 2}]);
  });

  it(`given a empty item, when running addItemToCart, then returns a array with the same items, being equal to [{name: 'feijão', price: 10, quantity: 4}]`, () => {
    const newItem = {} 
    const shoppingCart = [{name: 'feijão', price: 10, quantity: 4}]
    
    expect(addItemToCart(newItem, shoppingCart)).toEqual([{name: 'feijão', price: 10, quantity: 4}]);
  });

  it(`given a repeated item, when running addItemToCart, then returns a array with same items changing only the quantity of repeated item, being equal to [{name: 'leite', price: 16, quantity: 48}, {name: 'feijão', price: 10, quantity: 5}]`, () => {
    const newItem = {name: 'feijão', price: 10, quantity: 4} 
    const shoppingCart = [{name: 'feijão', price: 10, quantity: 4}, {name: 'leite', price: 16, quantity: 48}]
    
    expect(addItemToCart(newItem, shoppingCart)).toEqual([{name: 'leite', price: 16, quantity: 48}, {name: 'feijão', price: 10, quantity: 5}]);
  });

  it(`given a item, when running removeItemToCart, then returns a array with all items, being equals to [{name: 'leite', price: 25.98, quantity: 1}]`, () => {
    const removedItem = {name: 'feijão', price: 10, quantity: 4} 
    const shoppingCart = [{name: 'feijão', price: 10, quantity: 4}, {name: 'leite', price: 25.98, quantity: 1}]
    
    expect(removeItemToCart(removedItem, shoppingCart)).toEqual([{name: 'leite', price: 25.98, quantity: 1}]);
  });

  it(`given a item, when running subtractItemToCart, then returns a array with all items, being equals to [{name: 'leite', price: 20, quantity: 5}, {name: 'feijão', price: 10, quantity: 3}]`, () => {
    const reducedItem = {name: 'feijão', price: 10, quantity: 4} 
    const shoppingCart = [{name: 'feijão', price: 10, quantity: 4}, {name: 'leite', price: 20, quantity: 5}]
    
    expect(subtractItemToCart(reducedItem, shoppingCart)).toEqual([{name: 'leite', price: 20, quantity: 5}, {name: 'feijão', price: 10, quantity: 3}]);
  });

  it(`given a item with quantity 1, when running subtractItemToCart, then returns a array with all items, being equals to [{name: 'leite', price: 20, quantity: 5}]`, () => {
    const reducedItem = {name: 'feijão', price: 10, quantity: 1} 
    const shoppingCart = [{name: 'feijão', price: 10, quantity: 1}, {name: 'leite', price: 20, quantity: 5}]
    
    expect(subtractItemToCart(reducedItem, shoppingCart)).toEqual([{name: 'leite', price: 20, quantity: 5}]);
  });


describe('Tests of Exercice 4 - ShoppingCart', () => {
  it('given the shopCart where the sum of products is < 100, when running totalProducts, then returns the sum of all products without shipping, being equal to 98.98', () => {
    const allCart = [
      {name: 'arroz', price: 50, quantity: 1}, 
      {name: 'feijão', price: 8.50, quantity: 2}, 
      {name: 'leite', price: 5.99, quantity: 2}, 
      {name: 'bife', price: 20, quantity: 1}, 
    ]
    expect(totalProducts(allCart)).toEqual(98.98);
  });

  it('given the shopCart where the sum of products is > 100 and without user, when running totalProducts, then returns the sum of all products with shipping, being equal to 122.98', () => {
    const allCart = [
      {name: 'arroz', price: 50, quantity: 1}, 
      {name: 'feijão', price: 10.50, quantity: 2}, 
      {name: 'leite', price: 5.99, quantity: 2}, 
      {name: 'bife', price: 20, quantity: 1}, 
    ]
    expect(totalProducts(allCart)).toEqual(122.98);
  });

  it(`given the shopCart where the sum of products is > 100 and user is 'lucas', when running totalProducts, then returns the sum of all products with shipping, being equal to 162.97`, () => {
    const allCart = [
      {name: 'arroz', price: 50, quantity: 1}, 
      {name: 'feijão', price: 10.50, quantity: 2}, 
      {name: 'leite', price: 5.99, quantity: 2}, 
      {name: 'bife', price: 20, quantity: 1}, 
    ]
    expect(totalProducts(allCart, 'lucas')).toEqual(162.97);
  });
})

});