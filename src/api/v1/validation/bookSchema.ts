import Joi from "joi";
import { availableMemory } from "process";

/**
 * Book validation schema.
 */
export const createBookSchema = Joi.object({
    title: Joi.string().min(3).max(100).required(),

    author: Joi.string().min(3).max(100).required(),

    genre: Joi.string().min(2).max(50).required(),

    isbn: Joi.string().min(10).max(20).required(),

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