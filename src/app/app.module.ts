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
import { TsAdditionComponent } from './ts-addition/ts-addition.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { SfeAdditionComponent } from './sfe-addition/sfe-addition.component';
import { DchMapComponent } from './dch-map/dch-map.component';


@NgModule({
  declarations: [
    AppComponent
    , PizzaToppingsComponent
    , TsAdditionComponent
    , TjsMultiplicationComponent
    , SfeAdditionComponent
    , DchMapComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , FormsModule
    , MatCardModule
    , MatButtonModule
    , MatDatepickerModule
    , MatCheckboxModule
    , MatNativeDateModule
    , MatFormFieldModule
    , MatInputModule
    , LeafletModule
  ],

  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
