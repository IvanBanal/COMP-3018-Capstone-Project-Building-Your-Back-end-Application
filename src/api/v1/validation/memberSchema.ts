import Joi from "joi";

/**
 * Member create validation schema.
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