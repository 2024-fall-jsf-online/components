import { Component } from '@angular/core';

@Component({
  selector: 'app-pizza-calculator',
  templateUrl: './pizza-calculator.component.html',
  styleUrl: './pizza-calculator.component.css'
})
export class PizzaCalculatorComponent {
  numberOfPeople: number = 1;
  slicesPerPizza: number = 8; // Assuming each pizza has 8 slices
  slicesPerPerson: number = 3; // Adjust this based on how many slices each person eats

  getTotalPizzas(): number {
    const totalSlicesNeeded = this.numberOfPeople * this.slicesPerPerson;
    return Math.ceil(totalSlicesNeeded / this.slicesPerPizza);
  }
}
