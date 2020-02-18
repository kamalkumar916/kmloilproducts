import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';

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
  declarations: [ AppComponent, HelloComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
