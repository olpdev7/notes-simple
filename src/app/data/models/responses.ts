import { Note } from './models';

export interface PaginatedResponse {
    page: number;
    totalSize: number;
    children: any[];
}

export interface NotesResponse extends PaginatedResponse {
    children: Note[];
}

export interface NoteResponse extends Note {}