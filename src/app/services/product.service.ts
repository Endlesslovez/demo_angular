import { Injectable } from '@angular/core';
// import { Data } from '../Data';
import { ProductType } from '../Product';
import { HttpClient } from '@angular/common/http'; // service
import { Observable } from 'rxjs';//library

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private products = Data;
  private API: string = 'http://5c999ea71a4c360014a0ff5b.mockapi.io/products';
  constructor( private http: HttpClient) { }


  
  getProducts(): Observable<ProductType[]>{
    // return this.products;
    return this.http.get<ProductType[]>(this.API);
  }
  addProduct(product){
    // const newProduct = { id: 5, ...product};
    // this.products.push(newProduct);
    // console.log(this.products);
  }
}
