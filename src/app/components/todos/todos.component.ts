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

  constructor() { }

  ngOnInit(): void {
  }

}
