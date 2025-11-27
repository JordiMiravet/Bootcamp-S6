import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormMainComponent } from './components/form/form-main/form-main';

@Component({
  selector: 'app-root',
  imports: [ FormMainComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
