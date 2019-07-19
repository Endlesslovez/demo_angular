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
  isShowClass: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  detailProduct = product => {
      this.selectedProduct = product;
  }
  deleteProduct = product => {
    this.products = this.products.filter(item => item.id !== product.id );
  }
  setClass(){
    return{
        'border': this.isShowClass,
        'shadow': this.isShowClass
    }
  }
  clickMe(){
    this.isShowClass = !this.isShowClass;
  }
}
