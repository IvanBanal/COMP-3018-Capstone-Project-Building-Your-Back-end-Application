import { Request, Response } from "express";
import * as service from "../services/bookService";
import { HTTP_STATUS } from "../constants/httpConstants";

/**
 * This is a controller to create a new book.
 */
export const createBook = async (req: Request, res: Response): Promise<void> => {
    const book = await service.createBookService(req.body);

    const responseData = {
        id: book.id,
        title: book.title, 
        author: book.author,
        genre: book.genre,
        isbn: book.isbn,
        totalCopies: book.totalCopies,
        availableCopies: book.availableCopies,
        publishedYear: book.publishedYear,
        description: book.description,
        availability: book.availability,
        createdAt: book.createdAt,
        updatedAt: book.updatedAt
    };

    res.status(HTTP_STATUS.CREATED).json({
        message: "Book created",
        data: responseData
    });
};

/**
 * This is a controller to retrieve all books.
 */
export const getAllBooks = async (req: Request, res: Response) => {
    const books = await service.getAllBooksService();

    res.status(HTTP_STATUS.OK).json({
        message: "Books retrieved",
        count: books.length,
        data: books
    });
};

/** 
 * This is a controller to retrieve a book by ID.
 */
export const getBookById = async (req: Request, res: Response) => {
    const book = await service.getBookByIdService(req.params.id);

    if (!book) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Book not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        message: "Book retrieved",
        data: book
    });
};

/**
 * This is a controller to update a book by ID.
 */
export const updateBook = async (req: Request, res: Response) => {
    const updated = await service.updateBookService(req.params.id, req.body);

    if (!updated) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Book not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        message: "Book updated",
        data: updated
    });
};

/**
 * This is a controller to delete a book by ID.
 */
export const deleteBook = async (req: Request, res: Response) => {
    const deleted = await service.deleteBookService(req.params.id);

    if (!deleted) {
        res.status(HTTP_STATUS.NOT_FOUND).json({
            message: "Book not found"
        });
        return;
    }

    res.status(HTTP_STATUS.OK).json({
        message: "Book deleted"
    });
};
