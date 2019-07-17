import { Component, OnInit } from '@angular/core';
import { DataProduct } from '../data';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  product = DataProduct;
  constructor() { }

  ngOnInit() {
  }

  onClickMe = () => {
    this.product.name = 'Hey';
  }
  onKeyUp = event => {
    this.product.name = event.target.value;
  }
  
}
