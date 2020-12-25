import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Note } from '../data';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    static idCounter = 0;

    createDb() {
        const notes: Note[] = Array.from(Array(5))
            .map(n => ({ id: ++InMemoryDataService.idCounter, title: `Pregenerated note ${InMemoryDataService.idCounter}` }));
        return { notes };
    }

    getId(): number {
        return ++InMemoryDataService.idCounter;
    }
}