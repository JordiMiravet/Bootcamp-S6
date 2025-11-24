import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
