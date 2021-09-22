import { Component, OnInit } from '@angular/core';
import { TodoListItemModel } from 'src/app/models';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList: TodoListItemModel[] = [
    { description: 'Empty boxes in basement' },
    { description: 'Put Garden Hoses in Garage' }
  ];

  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onItemAdded(description: string) {
    if (this.todoList.some(todo => todo.description === description)) {
      this.errorMessage = 'You already have that on your list!';
    } else {
      this.todoList = [{ description }, ...this.todoList];
      this.errorMessage = '';
    }
  }
}
