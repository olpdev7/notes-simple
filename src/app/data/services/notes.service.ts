import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Note } from '../models'

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  getNotes(): Observable<Note[]> {
    return of([{
      id: '1',
      title: 'Item'
    }]);
  }
}
