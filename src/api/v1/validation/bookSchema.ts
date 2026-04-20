import Joi from "joi";

/**
 * Book create validation schema.
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