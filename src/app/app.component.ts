import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
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
