import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent {

  form: FormGroup = this.formBuilder.group({
    'item': ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(private formBuilder: FormBuilder) { }

  get item() { return this.form.get('item') };

  submit() {
    if (!this.form.valid) {
      console.warn('This form is invalid!');
    } else {
      console.log(this.form.value);
    }
  }
}
