import { Component, OnInit, Input } from '@angular/core';
import { Data } from './Data';
import { ProductType } from './Product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products = Data;
  selectedProduct: ProductType;
  isShow: boolean = false;
  @Input('dataAddress') address: string;
  constructor() { }

  ngOnInit() {
  }
  onClick = () => {
  }
  onKeyUp = event => {
  }
  productDetail(product){
    this.selectedProduct = product;
  }
  removeProduct(product){
    this.products = this.products.filter(item => item.id != product.id);
  }
  changeClass(){
    this.isShow = !this.isShow;
  }
}
