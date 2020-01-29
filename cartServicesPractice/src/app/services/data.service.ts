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
      price: 'View in Cart'
    },
    {
      id: '2',
      pName: 'A thing',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart'
    },
    {
      id: '3',
      pName: 'Another thing',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart'
    }
  ]
  constructor() { }

  getProducts(): Iproduct[] {
    return this.products;
  }

  addToCart(cartItem: Iproduct){
    this.itemsInCart.push(cartItem);
    console.log(this.itemsInCart);
  }

  getCartItems(): Iproduct[] {
    return this.itemsInCart;
  }
}
