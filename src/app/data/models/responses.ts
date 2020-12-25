import { Note } from './models';

export interface PaginatedResponse {
    page: number;
    totalSize: number;
    children: any[];
}

export interface GetNotesResponse extends PaginatedResponse {
    children: Note[];
}