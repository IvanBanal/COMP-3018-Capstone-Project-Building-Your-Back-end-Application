import Joi from "joi";

/**
 * Member validation schema.
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