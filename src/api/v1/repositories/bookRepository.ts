import { db } from "../config/firebaseConfig";
import { Book } from "../models/interfaces";

const COLLECTION = "books";

/**
 * This will create a new book in Firestore.
 * @param book - Book object to save.
 * @returns The saved book.
 */
export const createBookRepo = async (book: Book): Promise<Book> => {
    const docRef = db.collection(COLLECTION).doc(book.id!);
    await docRef.set(book);
    return book;
};

/**
 * This will retrieve all books from Firestore.
 * @returns Array of books.
 */ 
export const getAllBooksRepo = async (): Promise<Book[]> => {
    const snapshot = await db.collection(COLLECTION).get();
    return snapshot.docs.map(doc => doc.data() as Book);
};

/**
 * This will retrieve a single book by ID.
 * @params id - book ID.
 * @returns Book or null if not found.
 */
export const getBookByIdRepo = async (id: string): Promise<Book | null> => {
    const doc = await db.collection(COLLECTION).doc(id).get();
    if (!doc.exists) return null;
    return doc.data() as Book;
};
    