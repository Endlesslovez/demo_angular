import { Component, OnInit } from '@angular/core';
import { ProductType } from '../Products';
import { ProductService} from '../services/product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products: ProductType[];
  selectedProduct: ProductType;
  isShowClass: boolean = false;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  showMessage(){
    console.log('Hello');
  }
  getProducts(){
    this.products = this.productService.getProducts();
    console.log(this.products);
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
