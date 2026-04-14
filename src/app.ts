import express, { Express } from "express";
import dotenv from "dotenv";

// Load environment variables BEFORE your internal imports!
dotenv.config();

import cors from "cors";
import { getCorsOptions } from "../src/api/v1/config/corsConfig";
import { getHelmetConfig } from "../src/api/v1/config/helmetConfig";
import setupSwagger from "../src/api/v1/config/swagger";
import {
    accessLogger,
    errorLogger,
    consoleLogger,
} from "./api/v1/middleware/logger";
import errorHandler from "./api/v1/middleware/errorHandler";
import morgan from "morgan";
import bookRoutes from "../src/api/v1/routes/bookRoutes";
import memberRoutes from "../src/api/v1/routes/memberRoutes";
import adminRoutes from "../src/api/v1/routes/adminRoutes";
import { globalLimiter } from "./api/v1/middleware/rateLimit";

// Initialize Express application
const app: Express = express();

// Apply basic Helmet security
app.use(getHelmetConfig());

app.use(cors(getCorsOptions()));

// Logging middleware (should be applied early in the middleware stack)
if (process.env.NODE_ENV === "production") {
    // In production, log to files
    app.use(accessLogger);
    app.use(errorLogger);
} else {
    // In development, log to console for immediate feedback
    app.use(consoleLogger);
}

// Use Morgan for HTTP request logging
app.use(morgan("combined"));

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Health Check Endpoints.
app.get("/api/v1/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    });
});

app.use(express.json());

/**
 * Global API Protection
 */
app.use(globalLimiter);

// API Routes.
app.use("/api/v1/books", bookRoutes);
app.use("/api/v1/members", memberRoutes);
app.use("/api/v1/admin", adminRoutes);

// Setup Swagger
setupSwagger(app);

// Global error handling middleware (MUST be applied last)
app.use(errorHandler);

export default app;
