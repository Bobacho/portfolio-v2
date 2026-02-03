import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingWindows } from "./pages/loading-windows/loading-windows";
import { Desktop } from './pages/desktop/desktop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoadingWindows, Desktop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
