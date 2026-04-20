import express from "express";
import { setCustomClaims } from "../controllers/adminController";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";
import { strictLimiter } from "../middleware/rateLimit";

const router: express.Router = express.Router();

// Only admins can set custom claims
router.post(
    "/setCustomClaims",
    strictLimiter,
    authenticate,
    isAuthorized({ hasRole: ["admin"] }),
    setCustomClaims
);

export default router;
