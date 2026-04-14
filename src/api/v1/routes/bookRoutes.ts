import { Router } from "express";
import * as controller from "../controllers/bookController";
import { validateRequest } from "../middleware/validate";
import { createBookSchema } from "../validation/bookSchema";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router = Router();

router.post(
    "/", 
    authenticate,
    isAuthorized({ hasRole: ["librarian", "admin"] }),
    validateRequest({ body: createBookSchema }), 
    controller.createBook
);

router.get(
    "/", 
    authenticate, 
    isAuthorized({ hasRole: ["member", "librarian", "admin"] }),
    controller.getAllBooks
);

router.get(
    "/:id", 
    authenticate,
    isAuthorized({ hasRole: ["member", "librarian", "admin"] }),
    controller.getBookById
);

export default router;
