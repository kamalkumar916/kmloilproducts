import { Component } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
   providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppComponent  {
showSignup:boolean=false;
showLogin:boolean=false;
  constructor( ) { }

  ngOnInit() {
  }
  signup(){
this.showSignup=true;
  }
login(){
this.showLogin=true;
}
}
