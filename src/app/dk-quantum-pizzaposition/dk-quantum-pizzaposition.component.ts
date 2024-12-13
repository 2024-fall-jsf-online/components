import { Component } from '@angular/core';

@Component({
  selector: 'app-dk-quantum-pizzaposition',
  templateUrl: './dk-quantum-pizzaposition.component.html',
  styleUrl: './dk-quantum-pizzaposition.component.css'
})
export class DkQuantumPizzapositionComponent {
    pizzaMessage: string = "Undetermined."

    determinePizzaFate = () => {
      const pizzaMessages = [
        "Your pizza was destroyed in a cosmic incident.",
        "Your pizza will be delivered safely.",
        "Your pizza is stuck in rush hour traffic.",
        "Your pizza was eaten by a grue.",
        "Your pizza is already in the fridge.",
        "Your pizza has been eaten by me. Sorry."
      ]

      this.pizzaMessage = pizzaMessages[Math.floor(Math.random() * pizzaMessages.length)]
    }
}
