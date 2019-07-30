import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private API: string = 'http://5c999ea71a4c360014a0ff5b.mockapi.io/products';
  constructor(
    private http: HttpClient
  ) { }
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.API);
  }
}
