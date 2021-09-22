import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListItemModel } from 'src/app/models';
import { TodosDataService } from 'src/app/services/to-do-data.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoList$!: Observable<TodoListItemModel[]>;

  errorMessage: string = '';

  constructor(private service: TodosDataService) { }

  ngOnInit(): void {
    this.todoList$ = this.service.getDataAsObservable();
  }

  onItemAdded(description: string) {
    this.service.addItem(description);
  }

  onItemRemoved(description: string) {
    this.service.removeItem(description);
  }
}
