import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';

@NgModule({
  declarations: [
    AppComponent
    , PizzaToppingsComponent, TjsAdditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , FormsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
