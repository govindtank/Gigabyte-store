import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './start/app.component';

import {NavComponent } from './shared/navbar.component';
import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './error/error.component';
import { AppRoutingModule} from './shared/app.routing';

import { AdminModule} from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,//have to be placed here because dont work properly 404 error
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
