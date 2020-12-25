export interface PaginatedRequest {
    page: number;
    pageSize: number;
}

export interface GetNotesOptions extends PaginatedRequest {
    // user for search in InMemoryDb by note's title key
    title?: string;
}