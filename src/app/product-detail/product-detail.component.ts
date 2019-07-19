import { Component, OnInit, Input } from '@angular/core';
import { ProductType } from '../Products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product: ProductType;
  constructor() { }

  ngOnInit() {
    
  }

}
