import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsInCart: Iproduct[] = [];
  products: Iproduct[] = [
    {
      id: '1',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart',
      qty: 0
    },
    {
      id: '2',
      pName: 'A thing',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart',
      qty: 0
    },
    {
      id: '3',
      pName: 'Another thing',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart',
      qty: 0
    }
  ]
  constructor() { }

  getProducts(): Iproduct[] {
    return this.products;
  }

  addToCart(cartItem: Iproduct){
    if(!this.itemsInCart.includes(cartItem)){
      cartItem.qty++
      this.itemsInCart.push(cartItem);
      console.log(this.itemsInCart);
      console.log(cartItem.qty)
    } else {
      //search for item in cart
      //add 1 to quantity of that item
    }
  }

  getCartItems(): Iproduct[] {
    return this.itemsInCart;
  }

  emptyCart() {
    this.itemsInCart.length = 0;
  }

  removeItemFromCart(itemToRemove: Iproduct) {
    //search for product and remove it from itemsInCart
    //find the index location of product
    const index = this.findItemInCart(itemToRemove);
    this.itemsInCart[index].qty = 0;
    this.itemsInCart.splice(index, 1);
  }

  findItemInCart(id: Iproduct): number {
    //find id in cart
    return this.itemsInCart.indexOf(id);
    
  }
}
