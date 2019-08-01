import { Component, OnInit } from '@angular/core';
import { ProductType } from '../Products';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: ProductType = new ProductType();
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  addProduct(){
    this.productService.addProduct(this.product).subscribe(data => {
      console.log(data);
    });
  }
}
