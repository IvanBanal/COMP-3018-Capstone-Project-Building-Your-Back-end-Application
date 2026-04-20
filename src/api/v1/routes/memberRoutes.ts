import { Router } from "express";
import * as controller from "../controllers/memberController";
import { validateRequest } from "../middleware/validate";
import { createMemberSchema, updateMemberSchema } from "../validation/memberSchema";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router = Router();

/**
 * @openapi
 * /members:
 *   post:
 *     summary: Create a new member
 *     description: Add a new library member
 *     tags: [Members]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - membershipDate
 *               - phoneNumber
 *               - address
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Alice Johnson"
 *               email:
 *                 type: string
 *                 example: "alice@example.com"
 *               membershipDate:
 *                 type: string
 *                 format: date-time
 *               status:
 *                 type: string
 *                 example: "active"
 *               borrowLimit:
 *                 type: number
 *                 example: 5
 *               phoneNumber:
 *                 type: string
 *                 example: "555-123-4567"
 *               address:
 *                 type: string
 *                 example: "123 Maple Street"
 *     responses:
 *       '201':
 *         description: Member created successfully
 */
router.post(
    "/", 
    authenticate,
    isAuthorized({ hasRole: ["librarian", "admin"] }),
    validateRequest({ body: createMemberSchema }), 
    controller.createMember
);

/**
 * @openapi
 * /members:
 *   get:
 *     summary: Retrieve all members
 *     description: Get all library members
 *     tags: [Members]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Members retrieved successfully
 */
router.get(
    "/", 
    authenticate,
    isAuthorized({ hasRole: ["librarian", "admin"] }),
    controller.getAllMembers
);

/**
 * @openapi
 * /members/{id}:
 *   get:
 *     summary: Retrieve a member
 *     description: Get member details by ID
 *     tags: [Members]
 *     security:
 *       - bearerAuth: []
 */
router.get(
    "/:id", 
    authenticate,
    isAuthorized({ hasRole: ["librarian", "admin"] }),
    controller.getMemberById
);

/**
 * @openapi
 * /members/{id}:
 *   put:
 *     summary: Update a member
 *     description: Update member details by ID
 *     tags: [Members]
 *     security:
 *       - bearerAuth: []
 */
router.put(
    "/:id",
    authenticate,
    isAuthorized({ hasRole: ["librarian", "admin"] }),
    validateRequest({ body: updateMemberSchema }),
    controller.updateMember
);

/**
 * @openapi
 * /members/{id}:
 *   delete:
 *     summary: Delete a member
 *     description: Remove a member by ID
 *     tags: [Members]
 *     security:
 *       - bearerAuth: []
 */
router.delete(
    "/:id",
    authenticate,
    isAuthorized({ hasRole: ["admin"] }),
    controller.deleteMember
);

export default router;