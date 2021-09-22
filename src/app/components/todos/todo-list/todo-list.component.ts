import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoListItemModel } from 'src/app/models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input() items: TodoListItemModel[] = [];
  @Input() caption: string = '';
  @Output() itemCompleted = new EventEmitter<string>();

  constructor() { }

  itemRemoved(description: string) {
    this.itemCompleted.emit(description);
  }
}
