import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-oil-product-details',
  templateUrl: './oil-product-details.component.html',
  styleUrls: ['./oil-product-details.component.css']
})
export class OilProductDetailsComponent implements OnInit {
showSignup:boolean=false;
showLogin:boolean=false;
  constructor( private router:Router) { }

  ngOnInit() {
  }
  signup(){
this.showSignup=true;
  }
login(){
this.showLogin=true;
}
navigateProDetails(){
  this.router.navigate(['/productinfo'], { queryParams: { productId: 1 } });
}
}