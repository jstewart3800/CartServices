import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/interfaces/iproduct';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Iproduct[] = [];
  constructor(private dService: DataService) { } //grabs services on build

  ngOnInit() {
    this.products = this.dService.getProducts();
  }

  addToCart(p: Iproduct){
    this.dService.addToCart(p);
  }
};
