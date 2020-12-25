import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteListComponent } from './note-list/note-list.component';
import { MaterialHubModule } from '../material-hub/material-hub.module';
import { AddNoteFormComponent } from './add-note-form/add-note-form.component';


@NgModule({
  declarations: [NoteListComponent, AddNoteFormComponent],
  // entryComponents: [AddNoteFormComponent],
  imports: [
    CommonModule,
    MaterialHubModule,
    NotesRoutingModule,
    ReactiveFormsModule
  ]
})
export class NotesModule { }
