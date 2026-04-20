import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - genre
 *         - isbn
 *         - totalCopies
 *         - availableCopies
 *         - publishedYear
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the book
 *           example: "book_123abc"
 *         title:
 *           type: string
 *           minLength: 3
 *           maxLength: 100
 *           description: Book title
 *           example: "Clean Code"
 *         author:
 *           type: string
 *           minLength: 3
 *           maxLength: 100
 *           description: Book author
 *           example: "Robert C. Martin"
 *         genre:
 *           type: string
 *           minLength: 2
 *           maxLength: 50
 *           description: Book genre
 *           example: "Programming"
 *         isbn:
 *           type: string
 *           minLength: 10
 *           maxLength: 20
 *           description: ISBN identifier
 *           example: "9780132350884"
 *         totalCopies:
 *           type: integer
 *           description: Total number of copies in library
 *           example: 10
 *         availableCopies:
 *           type: integer
 *           description: Number of available copies
 *           example: 7
 *         publishedYear:
 *           type: integer
 *           description: Year the book was published
 *           example: 2008
 *         description:
 *           type: string
 *           minLength: 10
 *           maxLength: 500
 *           description: Book description
 *           example: "A handbook of software craftsmanship principles."
 *         availability:
 *           type: boolean
 *           default: true
 *           description: Whether the book is available for borrowing
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When the book was added
 *           example: "2026-01-01T10:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: When the book was last updated
 *           example: "2026-01-05T12:00:00Z"
 */
export const createBookSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),

    author: Joi.string().min(3).max(100).required(),

    genre: Joi.string().min(2).max(50).required(),

    isbn: Joi.string().min(10).max(20).required(),

    totalCopies: Joi.number() 
        .integer()
        .min(0)
        .required(),

    availableCopies: Joi.number()
        .integer()
        .min(0)
        .max(Joi.ref("totalCopies"))
        .required(),
    
    publishedYear: Joi.number()
        .integer()
        .min(1000)
        .max(new Date()
        .getFullYear())
        .required(),

    description: Joi.string().min(10).max(500).required(),

    availability: Joi.boolean().default(true),
});

/**
 * Book update validation schema. 
 */
export const updateBookSchema = Joi.object({
    title: Joi.string().min(3).max(100),

    author: Joi.string().min(3).max(100),

    genre: Joi.string().min(2).max(50),

    isbn: Joi.string().min(10).max(20),

    totalCopies: Joi.number() 
        .integer()
        .min(0),

    availableCopies: Joi.number()
        .integer()
        .min(0)
        .max(Joi.ref("totalCopies")),
    
    publishedYear: Joi.number()
        .integer()
        .min(1000)
        .max(new Date()
        .getFullYear()),

    description: Joi.string().min(10).max(500),

    availability: Joi.boolean(),
});