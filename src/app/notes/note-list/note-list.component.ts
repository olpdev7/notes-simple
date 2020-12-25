import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

import { NotesService } from '@app-data/services';
import { GetNotesOptions, GetNotesResponse } from '@app-data/models';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  paginatedItems$: Observable<GetNotesResponse>;
  paginationOptions = {
    pageIndex: 0,
    pageSize: 2,
    pageSizeOptions: [2]
  };

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    const options = this.getRequestOptions();
    this.paginatedItems$ = this.notesService.getNotes(options);
  }

  onPagination(pageEvent: PageEvent) {
    this.paginationOptions.pageIndex = pageEvent.pageIndex;
    const options = this.getRequestOptions();
    this.paginatedItems$ = this.notesService.getNotes(options);
  }

  private getRequestOptions(): GetNotesOptions {
    return { page: this.paginationOptions.pageIndex, pageSize: this.paginationOptions.pageSize };
  }
}
