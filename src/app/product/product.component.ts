import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { Data } from '../data';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {
  products = Data;
  constructor() { }

  ngOnInit() {
  }
}
