import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap, tap } from 'rxjs/operators';

import { NotesService } from '@app-data/services';
import { GetNotesOptions, Note, NotesResponse } from '@app-data/models';
import { AddNoteFormComponent } from '../add-note-form/add-note-form.component';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  @ViewChild('confirmDelete') confirmDeleteTemplate;

  paginatedItems$: Observable<NotesResponse>;
  paginationOptions = {
    pageIndex: 0,
    pageSize: 5,
    pageSizeOptions: [5]
  };

  constructor(private notesService: NotesService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

  onPagination(pageEvent: PageEvent) {
    this.paginationOptions.pageIndex = pageEvent.pageIndex;
    this.loadData();
  }

  removeNote(note: Note): void {
    this.matDialog.open(this.confirmDeleteTemplate, {
      data: { note }
    })
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap(() => this.notesService.removeNote(note.id))
      ).subscribe(() => this.loadData())
  }

  addNote(): void {
    this.matDialog.open(AddNoteFormComponent)
      .afterClosed()
      .pipe(
        filter(Boolean),
        switchMap((note: Note) => this.notesService.addNote(note))
      ).subscribe(() => this.loadData())
  }

  private loadData(): void {
    const options = this.getRequestOptions();
    this.paginatedItems$ = this.notesService.getNotes(options)
      .pipe(tap(notes => this.paginationOptions.pageIndex = notes.page));
  }

  private getRequestOptions(): GetNotesOptions {
    return { page: this.paginationOptions.pageIndex, pageSize: this.paginationOptions.pageSize };
  }
}
