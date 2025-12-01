import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { HeaderComponent } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
