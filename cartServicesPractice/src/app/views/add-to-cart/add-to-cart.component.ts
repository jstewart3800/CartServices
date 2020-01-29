import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  cartItems: Iproduct[];
  constructor(private dService: DataService) { }

  ngOnInit() {
    this.cartItems = this.dService.getCartItems();
  }

  removeCartItems() {
    //call service to remove items from cart
    this.dService.emptyCart();
  }

  removeItem(id: Iproduct) {
    this.dService.removeItemFromCart(id);
  }
}
