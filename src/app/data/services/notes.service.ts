import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { GetNotesOptions, GetNotesResponse, Note } from '../models'

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http: HttpClient) { }

  getNotes(options: GetNotesOptions): Observable<GetNotesResponse> {
    const url = `api/notes`;
    return this.http.get<GetNotesResponse>(url, { params: this.toParams(options) });
  }

  private toParams(opts: any): { [k: string]: string } {
    return Object.keys(opts).reduce((result, k) => {
      result[k] = opts[k] + '';
      return result;
    }, {})
  }
}
