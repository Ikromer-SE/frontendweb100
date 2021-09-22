import { Component } from '@angular/core';
import { TodoListItemModel } from 'src/app/models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  items: TodoListItemModel[] = [
    { description: 'Empty boxes in basement' },
    { description: 'Put garden hoses in garage' }
  ];

  constructor() { }


}
