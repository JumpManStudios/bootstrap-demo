import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-form-input',
  imports: [
    FormsModule
  ],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {
  @Input() label: string = 'Label'; // Customizable label text
  value: string = ''; // Input value
  isActive: boolean = false; // Tracks focus state

  onFocus() {
    this.isActive = true;
  }

  onBlur() {
    this.isActive = false;
  }
}
