import { Router } from "express";
import * as controller from "../controllers/bookController";
import { validateRequest } from "../middleware/validate";
import { createEventSchema } from "../validation/eventSchema";
