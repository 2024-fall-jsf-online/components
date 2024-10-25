import { Component } from '@angular/core';

@Component({
  selector: 'app-ts-addition',
  templateUrl: './ts-addition.component.html',
  styleUrl: './ts-addition.component.css'
})
export class TsAdditionComponent {
  selectedDate: Date | null = null;
  selectedTime: string = '';

  // Function to handle order submission
  submitOrder() {
    const orderDateTime = this.getCombinedDateTime();
    console.log('Order Date and Time:', orderDateTime);
  }

  // Function to combine the selected date and time, or use real-time if none is selected
  getCombinedDateTime() {
    let orderDate: Date;

    // If no date is selected, use current date and time
    if (!this.selectedDate) {
      orderDate = new Date();
    } else {
      orderDate = new Date(this.selectedDate);
    }

    // If time is provided, set the hours and minutes, otherwise use current time
    if (this.selectedTime) {
      const [hours, minutes] = this.selectedTime.split(':').map(Number);
      orderDate.setHours(hours);
      orderDate.setMinutes(minutes);
    }

    return orderDate;
  }
}