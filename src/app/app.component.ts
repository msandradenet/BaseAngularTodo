import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = "Minhas Tarefas";

  constructor() {
    this.todos.push(new Todo(1, 'passear com o cachorro', false));
    this.todos.push(new Todo(1, 'Ir ao supermercado', false));
    this.todos.push(new Todo(1, 'Cortar o cabelo', true));
  }

}
