import Joi from "joi";

/**
 * @openapi
 * components:
 *   schemas:
 *     Member:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - membershipDate
 *         - status
 *         - borrowLimit
 *         - phoneNumber
 *         - address
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the member
 *           example: "member_123abc"
 *         name:
 *           type: string
 *           minLength: 3
 *           maxLength: 100
 *           description: Member full name
 *           example: "John Doe"
 *         email:
 *           type: string
 *           format: email
 *           description: Member email address
 *           example: "john@example.com"
 *         membershipDate:
 *           type: string
 *           format: date-time
 *           description: Date the member joined
 *           example: "2026-01-01T10:00:00Z"
 *         status:
 *           type: string
 *           enum: [active, inactive, suspended]
 *           default: active
 *           description: Membership status
 *         borrowLimit:
 *           type: integer
 *           minimum: 1
 *           maximum: 20
 *           default: 5
 *           description: Maximum number of books allowed to borrow
 *         phoneNumber:
 *           type: string
 *           minLength: 10
 *           maxLength: 15
 *           description: Member phone number
 *           example: "1234567890"
 *         address:
 *           type: string
 *           minLength: 5
 *           maxLength: 200
 *           description: Member address
 *           example: "123 Main St, Winnipeg"
 *         booksBorrowed:
 *           type: array
 *           items:
 *             type: string
 *           description: List of borrowed book IDs
 *           example: ["book_123", "book_456"]
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When the member was created
 *           example: "2026-01-01T10:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: When the member was last updated
 *           example: "2026-01-05T12:00:00Z"
 */
export const createMemberSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),

    email: Joi.string().email().required(),

    membershipDate: Joi.date().iso().required(), 

    status: Joi.string()
        .valid("active", "inactive", "suspended")
        .default("active"),

    borrowLimit: Joi.number().integer().min(1).max(20).default(5),

    phoneNumber: Joi.string().min(10).max(15).required(),

    address: Joi.string().min(5).max(200).required(),

    booksBorrowed: Joi.array().items(Joi.string()).default([]),
});

/**
 * Member update validation schema.
 */
export const updateMemberSchema = Joi.object({
    name: Joi.string().min(3).max(100),

    email: Joi.string().email(),

    membershipDate: Joi.date().iso(), 

    status: Joi.string()
        .valid("active", "inactive", "suspended"),

    borrowLimit: Joi.number().integer().min(1).max(20),

    phoneNumber: Joi.string().min(10).max(15),

    address: Joi.string().min(5).max(200),

    booksBorrowed: Joi.array().items(Joi.string()),
});