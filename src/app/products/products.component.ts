import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../Data';
import { ProductType } from '../Product';
import { ProductService } from '../services/product.service'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products: ProductType[];
  selectedProduct: ProductType;
  isShow: boolean = false;
  @Input('dataAddress') address: string;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.products = this.productService.getProducts();
    console.log(this.products);
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
