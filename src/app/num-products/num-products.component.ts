import { Component } from '@angular/core';

@Component({
  selector: 'app-num-products',
  templateUrl: './num-products.component.html',
  styleUrls: ['./num-products.component.css']
})
export class NumProductsComponent {
  firstnumber = 2;
  secondnumber = 3;
  thirdnumber = 4;  
  result = 24;
  
  multiply = () => this.result = this.firstnumber * this.secondnumber * this.thirdnumber;
}
