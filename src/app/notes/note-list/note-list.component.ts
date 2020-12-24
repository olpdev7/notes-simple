import { Component, OnInit } from '@angular/core';

import { NotesService } from '@app-data/services';
import { Note } from '@app-data/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {

  items$: Observable<Note[]>;

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.items$ = this.notesService.getNotes();
  }

}
