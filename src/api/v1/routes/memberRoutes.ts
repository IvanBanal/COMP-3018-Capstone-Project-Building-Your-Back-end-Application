import { Router } from "express";
import * as controller from "../controllers/memberController";
import { validateRequest } from "../middleware/validate";
import { createMemberSchema } from "../validation/memberSchema";

const router = Router();

router.post("/", validateRequest({ body: createMemberSchema }), controller.createMember);
router.get("/", controller.getAllMembers);
router.get("/:id", controller.getMemberById);

export default router;