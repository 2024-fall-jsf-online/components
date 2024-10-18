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
import { DmwAdditionComponent } from './dmw-addition/dmw-addition.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/input';

import { ToggleImageComponent } from './toggle-image/toggle-image.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { MatFormFieldModule } from '@angular/material/form-field';
import { LeafletModule } from '@bluehalo/ngx-leaflet';

import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { SfeAdditionComponent } from './sfe-addition/sfe-addition.component';
import { DchMapComponent } from './dch-map/dch-map.component';
import { PizzaCalculatorComponent } from './pizza-calculator/pizza-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaToppingsComponent,
    ToggleImageComponent,
    TjsMultiplicationComponent,
    SfeAdditionComponent,
    DchMapComponent,
    PizzaCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    LeafletModule,
    ToggleImageComponent,
    PizzaToppingsComponent,
    TjsMultiplicationComponent,
    SfeAdditionComponent,
    DchMapComponent,
    DmwAdditionComponent,
    MatProgressSpinner,
    MatFormField,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
