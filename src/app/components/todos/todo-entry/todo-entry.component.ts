import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-entry',
  templateUrl: './todo-entry.component.html',
  styleUrls: ['./todo-entry.component.css']
})
export class TodoEntryComponent {

  @Output() itemAdded = new EventEmitter<string>();

  form: FormGroup = this.formBuilder.group({
    'item': ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(private formBuilder: FormBuilder) { }

  get item() { return this.form.get('item') };

  submit(el: HTMLInputElement) {
    if (!this.form.valid) {
      console.warn('This form is invalid!');
    } else {
      const description = this.item?.value;
      this.itemAdded.emit(description);
      el.value = '';
      el.focus();

    }
  }
}
