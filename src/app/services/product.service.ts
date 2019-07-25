import { Injectable } from '@angular/core';
import { Data } from '../Data';
import { ProductType } from '../Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = Data;
  constructor() { }
  getProducts(): ProductType[]{
    return this.products;
  }
  addProduct(product){
    const newProduct = { id: 5, ...product};
    this.products.push(newProduct);
    console.log(this.products);
  }
}
