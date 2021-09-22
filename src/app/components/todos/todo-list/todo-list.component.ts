import { Component, Input } from '@angular/core';
import { TodoListItemModel } from 'src/app/models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() items: TodoListItemModel[] = [];
  @Input() caption: string = '';

  constructor() { }
}
