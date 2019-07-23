import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Product';
import { Data } from '../data';
import { HelloService } from '../hello.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  products = Data;
  selectedProduct: Product;
  @Input('data') dataProduct: string;
  constructor(
    private helloService: HelloService
  ) { }

  ngOnInit() {
    this.helloService.showHello();
  }
  detailProduct(product){
    this.selectedProduct = product;
  }
  removeProduct(product){
    this.products = this.products.filter(item => item.id != product.id)
  }
}
