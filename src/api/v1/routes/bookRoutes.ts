import { Router } from "express";
import * as controller from "../controllers/bookController";
import { validateRequest } from "../middleware/validate";
import { createBookSchema } from "../validation/bookSchema";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router = Router();

router.post("/", validateRequest({ body: createBookSchema }), controller.createBook);
router.get("/", controller.getAllBooks);
router.get("/:id", controller.getBookById);

export default router;
