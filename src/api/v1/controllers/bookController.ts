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
        availability: book.availablity,
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


