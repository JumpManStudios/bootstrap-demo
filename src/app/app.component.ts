import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormInputComponent} from './form-input/form-input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bootstrap-demo';
}
