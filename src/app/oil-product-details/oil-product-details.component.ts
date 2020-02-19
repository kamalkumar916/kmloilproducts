import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oil-product-details',
  templateUrl: './oil-product-details.component.html',
  styleUrls: ['./oil-product-details.component.css']
})
export class OilProductDetailsComponent implements OnInit {
showSignup:boolean=false;
showLogin:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  signup(){
this.showSignup=true;
  }
login(){
this.showLogin=true;
}
}