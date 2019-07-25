import { Component, OnInit, Input } from '@angular/core';
import { ProductType } from '../Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  @Input('data') product : ProductType;
  constructor() { }

  ngOnInit() {
  }

}
