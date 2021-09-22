import { Component } from '@angular/core';
import { TodosDataService } from './services/to-do-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Frontend Web 100 - Progressive ITU';

  constructor(service: TodosDataService) {
    service.loadTheData();
  }

  changeTitle() {
    this.title = "Izaak Waz Here"
  }
}
