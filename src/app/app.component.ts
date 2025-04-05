import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {FormInputComponent} from './shared/form-input/form-input.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, FormInputComponent, FormInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'bootstrap-demo';
}
