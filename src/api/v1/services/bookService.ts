import { Book } from "../models/interfaces";
import * as repo from "../repositories/bookRepository";

let counter = 1;

/**
 * This will generate a unique Book ID like book_000001.
 * @returns Event ID string.
 */
const generateId = () => {
    /**
     * counter++ will use the current value of counter and increase 
     * it by 1 for the next call.
     * .padStart makes the string at least 6 characters long and if 
     * it's shorter, it pads with "0" at the start.
     */
    return `book_${String(counter++).padStart(6, "0")}`;
};

/** 
 * This will create a new book and saves it to Firestore.
 * @param data - Book input data.
 * @returns Created Book with generated fields.
 */
export const createBookService = async (data: Partial<Book>): Promise<Book> => {
    const now = new Date().toISOString();

    const book: Book = {
        id: generateId(),
        title: data.title!,
        author: data.author!,
        genre: data.genre!,
        isbn: data.isbn!,
        totalCopies: data.totalCopies!,
        availableCopies: data.availableCopies!,
        publishedYear: data.publishedYear!,
        description: data.description!,
        availability: data.availability ?? true,
        createdAt: now,
        updatedAt: now
    };
    
    return await repo.createBookRepo(book);
};

/**
 * This will retrieve all books.
 * @returns Array of books.
 */
export const getAllBooksService = async () => {
    return await repo.getAllBooksRepo();
};

/**
 * This will retrieve book by ID.
 * @param id - Book ID.
 * @returns Book or null.
 */
export const getBookByIdService = async (id: string) => {
    return await repo.getBookByIdRepo(id);
};

/**
 * This will update a book by ID.
 * @param id - Book ID.
 * @returns Updated book or null.
 */
export const updateBookService = async (id: string, data: Partial<Book>): Promise<Book | null> => {
    const updateData = {
        ...data,
        updatedAt: new Date().toISOString()
    }

    return await repo.updateBookRepo(id, updateData);
};

/**
 * This will delete a book by ID.
 * @param id - Book ID.
 * @returns True if deleted, false if not found.
 */
export const deleteBookService = async (id: string) => {
    return await repo.deleteBookRepo(id);
};