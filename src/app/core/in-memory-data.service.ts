import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Note } from '../data';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    static idCounter = 0;

    createDb() {
        const notes: Note[] = [
            { id: ++InMemoryDataService.idCounter, title: 'Note 111111111111111111111 111111111111111111111 111111111111111111111111' },
            { id: ++InMemoryDataService.idCounter, title: 'Note 2' },
            { id: ++InMemoryDataService.idCounter, title: 'Note 3' },
        ];
        return { notes };
    }

    getId(): number {
        return ++InMemoryDataService.idCounter;
    }
}