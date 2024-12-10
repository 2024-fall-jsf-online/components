import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';

import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatRadioModule } from '@angular/material/radio';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/select';
import { DmwAdditionComponent } from './dmw-addition/dmw-addition.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatFormField } from '@angular/material/input';
import { ToggleImageComponent } from './toggle-image/toggle-image.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { NumProductsComponent } from './num-products/num-products.component';
import { PizzaCalculatorComponent } from './pizza-calculator/pizza-calculator.component';
import { NdhPizzaSelectorComponent } from './ndh-pizza-selector/ndh-pizza-selector.component';
import { TjsAdditionComponent } from './tjs-addition/tjs-addition.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { TtySizesComponent } from './tty-sizes/tty-sizes.component';
import { TsAdditionComponent } from './ts-addition/ts-addition.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { MatFormFieldModule } from '@angular/material/form-field';

import { TjsMultiplicationComponent } from './tjs-multiplication/tjs-multiplication.component';
import { SfeAdditionComponent } from './sfe-addition/sfe-addition.component';
import { DchMapComponent } from './dch-map/dch-map.component';
import { SkaAdditionComponent } from './ska-addition/ska-addition.component';
import { FeeDeliveryComponent } from './fee-delivery/fee-delivery.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { AoAdditionComponent } from './ao-addition/ao-addition.component';
import { DkQuantumPizzapositionComponent } from './dk-quantum-pizzaposition/dk-quantum-pizzaposition.component';


@NgModule({
  declarations: [
    AppComponent
    , PizzaToppingsComponent,
    TemperatureConverterComponent,
    TtySizesComponent, 
    ToggleImageComponent,
    TjsMultiplicationComponent,
    SfeAdditionComponent,
    DchMapComponent,
    DmwAdditionComponent,
    NumProductsComponent,
    PizzaCalculatorComponent,
    NdhPizzaSelectorComponent,
    TjsAdditionComponent,
    PizzaToppingsComponent,
    TsAdditionComponent,
    TjsMultiplicationComponent,
    SfeAdditionComponent,
    DchMapComponent,
    SkaAdditionComponent,
    TjsAdditionComponent,
    FeeDeliveryComponent,
    CommentBoxComponent,
    AoAdditionComponent,
    DkQuantumPizzapositionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    , FormsModule
    , MatCardModule
    , MatButtonModule
    , MatCheckboxModule
    , MatRadioModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    LeafletModule,
    MatProgressSpinner,
    MatFormField,
    MatSelect,
    MatOption,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    LeafletModule,
  ],

  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
