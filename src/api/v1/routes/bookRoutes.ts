import { Router } from "express";
import * as controller from "../controllers/bookController";
import { validateRequest } from "../middleware/validate";
import { createBookSchema, updateBookSchema } from "../validation/bookSchema";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router = Router();

/**
 * @openapi
 * /books:
 *   post:
 *     summary: Create a new book
 *     description: Add a new book to the library system
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - author
 *               - genre
 *               - isbn
 *               - totalCopies
 *               - availableCopies
 *               - publishedYear
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Harry Potter and the Sorcerer's Stone"
 *               author:
 *                 type: string
 *                 example: "J.K. Rowling"
 *               genre:
 *                 type: string
 *                 example: "Fantasy"
 *               isbn:
 *                 type: string
 *                 example: "9780590353427"
 *               totalCopies:
 *                 type: number
 *                 example: 12
 *               availableCopies:
 *                 type: number
 *                 example: 12
 *               publishedYear:
 *                 type: number
 *                 example: 1997
 *               description:
 *                 type: string
 *                 example: "A young wizard begins his journey at Hogwarts."
 *               availability:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       '201':
 *         description: Book created successfully
 *       '400':
 *         description: Invalid input data
 *       '401':
 *         description: Unauthorized
 */
router.post(
    "/", 
    authenticate,
    isAuthorized({ hasRole: ["librarian", "admin"] }),
    validateRequest({ body: createBookSchema }), 
    controller.createBook
);

/**
 * @openapi
 * /books:
 *   get:
 *     summary: Retrieve all books
 *     description: Get a list of all books
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Books retrieved successfully
 */
router.get(
    "/", 
    authenticate, 
    isAuthorized({ hasRole: ["member", "librarian", "admin"] }),
    controller.getAllBooks
);

/**
 * @openapi
 * /books/{id}:
 *   get:
 *     summary: Retrieve a single book
 *     description: Get book details by ID
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Book retrieved successfully
 *       '404':
 *         description: Book not found
 */
router.get(
    "/:id", 
    authenticate,
    isAuthorized({ hasRole: ["member", "librarian", "admin"] }),
    controller.getBookById
);

/**
 * @openapi
 * /books/{id}:
 *   put:
 *     summary: Update a book
 *     description: Update an existing book by ID
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Title"
 *               author:
 *                 type: string
 *                 example: "Updated Author"
 *               genre:
 *                 type: string
 *                 example: "Fantasy"
 *               isbn:
 *                 type: string
 *                 example: "9780590353427"
 *               totalCopies:
 *                 type: number
 *                 example: 15
 *               availableCopies:
 *                 type: number
 *                 example: 10
 *               publishedYear:
 *                 type: number
 *                 example: 1997
 *               description:
 *                 type: string
 *                 example: "Updated description"
 *               availability:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       '200':
 *         description: Book updated successfully
 *       '404':
 *         description: Book not found
 */
router.put(
    "/:id",
    authenticate,
    isAuthorized({ hasRole: ["librarian", "admin"] }),
    validateRequest({ body: updateBookSchema }),
    controller.updateBook
);

/**
 * @openapi
 * /books/{id}:
 *   delete:
 *     summary: Delete a book
 *     description: Remove a book by ID
 *     tags: [Books]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Book deleted successfully
 *       '404':
 *         description: Book not found
 */
router.delete(
    "/:id",
    authenticate,
    isAuthorized({ hasRole: ["librarian", "admin"] }),
    controller.deleteBook
);

export default router;
