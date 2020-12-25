import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Note } from '../data';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    static idCounter = 3;

    createDb() {
        const notes: Note[] = [
            { id: '1', title: 'Note 1' },
            { id: '2', title: 'Note 2' },
            { id: '3', title: 'Note 3' },
        ];
        return { notes };
    }

    getId(): string {
        return ++InMemoryDataService.idCounter + '';
    }
}