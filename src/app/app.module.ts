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
import { ToggleImageComponent } from './toggle-image/toggle-image.component';
import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { SfeAdditionComponent } from './sfe-addition/sfe-addition.component';
import { DchMapComponent } from './dch-map/dch-map.component';
import { PizzaCalculatorComponent } from './pizza-calculator/pizza-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    AppComponent,
    PizzaToppingsComponent,
    PizzaCalculatorComponent,
    ToggleImageComponent,
    TjsMultiplicationComponent,
    SfeAdditionComponent,
    DchMapComponent,
    PizzaCalculatorComponent,
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
export class AppModule {}
