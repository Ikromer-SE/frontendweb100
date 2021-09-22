import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent {

  form: FormGroup = this.formBuilder.group({
    'item': ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  submit() {
    console.log(this.form.value);
  }
}
