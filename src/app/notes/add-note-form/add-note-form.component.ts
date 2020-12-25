import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-note-form',
  templateUrl: './add-note-form.component.html',
  styleUrls: ['./add-note-form.component.scss']
})
export class AddNoteFormComponent implements OnInit {
  addNoteForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addNoteForm = this.fb.group({
      title: ['', [Validators.required]]
    });
  }

}
