import { BehaviorSubject, Observable } from "rxjs";
import { TodoListItemModel } from "../models";
import { map, } from 'rxjs/operators'

export class TodosDataService {

  private data!: BehaviorSubject<TodoListItemModel[]>;

  private cache: TodoListItemModel[] = [
    { description: 'Learn RXJS' },
    { description: 'Decide if this web development is just a fad' }
  ];
  loadTheData() {
    // go to the api and get the data.
    this.data = new BehaviorSubject<TodoListItemModel[]>(this.cache);
  }

  getDataAsObservable(): Observable<TodoListItemModel[]> {
    return this.data
      .asObservable()
      .pipe(
        map(unsortedItems => {
          return [...unsortedItems.sort((lhs, rhs) => {
            if (lhs.description.toLocaleLowerCase() < rhs.description.toLocaleLowerCase()) {
              return -1;
            }
            if (lhs.description.toLocaleLowerCase() > rhs.description.toLocaleLowerCase()) {
              return 1;
            }
            return 0; // the same.
          })]
        })
      )
  }

  addItem(description: string): void {
    const newItem: TodoListItemModel = { description };
    // send it to the API or whatever
    this.cache = [newItem, ... this.cache];
    this.data.next(this.cache);
  }

  getNumberOfTodos(): Observable<number> {
    return this.data.pipe(
      map(todos => todos.length)
    );
  }

  removeItem(description: string): void {
    this.cache = this.cache.filter(todo => todo.description !== description);
    this.data.next(this.cache);
  }
}
