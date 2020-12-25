import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GetNotesOptions, NotesResponse, NoteResponse, Note } from '../models'

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  getNotes(options: GetNotesOptions): Observable<NotesResponse> {
    const url = `api/notes`;
    return this.http.get<NotesResponse>(url, { params: this.toParams(options) });
  }

  addNote(note: Note): Observable<NoteResponse> {
    const url = `api/notes`;
    console.log(note);
    return this.http.post<NoteResponse>(url, note);
  }

  removeNote(noteId: number): Observable<void> {
    console.log(noteId);
    const url = `api/notes/${noteId}`;
    return this.http.delete<void>(url);
  }

  private toParams(opts: any): { [k: string]: string } {
    return Object.keys(opts).reduce((result, k) => {
      result[k] = opts[k] + '';
      return result;
    }, {})
  }
}
