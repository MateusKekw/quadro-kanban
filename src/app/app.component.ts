import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KanbanComponent } from "./components/kanban/kanban.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, KanbanComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio';
}
