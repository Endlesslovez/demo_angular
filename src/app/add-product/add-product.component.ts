import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductType } from '../Product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent implements OnInit {
  product: ProductType = new ProductType();
  @Output('keyAddress') onHandleAddress = new EventEmitter<string>();
  constructor(
    private productService : ProductService
  ) { }

  ngOnInit() {
  }
  getAddress(){
    // this.onHandleAddress.emit(this.address)
  }
  addProduct(){
    this.productService.addProduct(this.product);
  }
}
