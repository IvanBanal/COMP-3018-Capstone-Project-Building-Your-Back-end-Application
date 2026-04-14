export interface Book {
    id?: string;
    title: string;
    author: string;
    genre: string;
    isbn: string;
    totalCopies: number;
    availableCopies: number;
    publishedYear: number;
    description: string;
    availablity: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

