import { Component, OnInit } from '@angular/core';
import { ProductType } from '../Products';
import { DataProduct } from '../data';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products = DataProduct;
  selectedProduct: ProductType;
  constructor() { }

  ngOnInit() {
  }
  detailProduct = product => {
    console.log(product);
      this.selectedProduct = product;
  }
  deleteProduct = product => {
    this.products = this.products.filter(item => item.id !== product.id );
  }
}
