import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import { RegisterComponent } from './register/register.component';
import { OilProductDetailsComponent } from './oil-product-details/oil-product-details.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
];
@NgModule({
  imports:      [ BrowserModule, FormsModule,InputTextModule,
   RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ) ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, RegisterComponent, OilProductDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
