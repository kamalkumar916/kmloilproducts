import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import { OilProductDetailsComponent } from './oil-product-details/oil-product-details.component';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
const appRoutes: Routes = [
  { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    {path:'oil_details', component:OilProductDetailsComponent}
];
@NgModule({
  imports:      [ BrowserModule, FormsModule,InputTextModule,ToolbarModule,ButtonModule,
  DialogModule,
  BrowserAnimationsModule,
CardModule,
   RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } 
    ) ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, OilProductDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
