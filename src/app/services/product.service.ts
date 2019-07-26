import { Injectable } from '@angular/core';
import { ProductType } from '../Products';
import { DataProduct } from '../data';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = DataProduct;
  constructor() { }

  getProducts(): ProductType[]{
    return this.products;
  }
  
  addProduct(product){
      const newProduct = {id: this.products.length + 1, ...product}
      this.products.push(newProduct)
  }
}
