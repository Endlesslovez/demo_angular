import { Injectable } from '@angular/core';
import { ProductType } from '../Products';
import { DataProduct } from '../data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private products = DataProduct;
  private API: string = 'https://5c999ea71a4c360014a0ff5b.mockapi.io';
  constructor( private http: HttpClient) { }

  getProducts(): Observable<ProductType[]>{
    return this.http.get<ProductType[]>(`${this.API}/products`);
  }

  addProduct(product):Observable<ProductType>{
    return this.http.post<ProductType>(`${this.API}/products`, product)
    // console.log(product);
    //   const newProduct = {
    //       id: this.products.length + 1,
    //        ...product
    //       }
    //   this.products.push(newProduct)
  }
}
