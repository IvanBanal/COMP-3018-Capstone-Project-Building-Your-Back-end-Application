import { Router } from "express";
import * as controller from "../controllers/memberController";
import { validateRequest } from "../middleware/validate";
import { createMemberSchema } from "../validation/memberSchema";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router = Router();

router.post(
    "/", 
    authenticate,
    isAuthorized({ hasRole: ["librarian", "admin"] }),
    validateRequest({ body: createMemberSchema }), 
    controller.createMember
);

router.get(
    "/", 
    authenticate,
    isAuthorized({ hasRole: ["admin"] }),
    controller.getAllMembers
);

router.get(
    "/:id", 
    authenticate,
    isAuthorized({ hasRole: ["librarian", "admin"] }),
    controller.getMemberById
);

router.put(
    "/:id",
    authenticate,
    isAuthorized({ hasRole: ["librarian", "admin"] }),
    controller.updateMember
);

router.delete(
    "/:id",
    authenticate,
    isAuthorized({ hasRole: ["admin"] }),
    controller.deleteMember
);

export default router;