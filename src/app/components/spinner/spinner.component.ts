import { Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="spinner-container">
      <mat-progress-spinner mode="indeterminate"></mat-progress-spinner>
    </div>
  `,
  styles: [`
    .spinner-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  `]
})
export class SpinnerComponent {}
