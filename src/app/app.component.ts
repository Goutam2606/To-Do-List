import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { TodolistComponent } from './todolist/todolist.component';
import { CommonModule } from '@angular/common';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToDoListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-Do-List';
}
