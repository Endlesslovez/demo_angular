import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PT14101-UD';
  address: string;
  getAddress(value){
    console.log(value);
    this.address = value;
  }
}
