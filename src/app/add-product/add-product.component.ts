import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output('keyAddress') onHandleAddress = new EventEmitter<string>();
  address: string;

  constructor( private helloService: HelloService) { }

  ngOnInit() {
    this.helloService.showHello()
  }
  onHadleClick(){
    this.onHandleAddress.emit(this.address);
  }

}
