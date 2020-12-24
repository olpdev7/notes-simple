import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteListComponent } from './note-list/note-list.component';
import { MaterialHubModule } from '../material-hub/material-hub.module';


@NgModule({
  declarations: [NoteListComponent],
  imports: [
    CommonModule,
    MaterialHubModule,
    NotesRoutingModule
  ]
})
export class NotesModule { }
