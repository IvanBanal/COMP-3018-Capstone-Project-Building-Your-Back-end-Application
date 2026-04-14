import express, { Express } from "express";
import dotenv from "dotenv";

// Load environment variables BEFORE your internal imports!
dotenv.config();

import cors from "cors";
import { getCorsOptions } from "../src/api/v1/config/corsConfig";
import { getHelmetConfig } from "../src/api/v1/config/helmetConfig";
import setupSwagger from "../src/api/v1/config/swagger";
import bookRoutes from "../src/api/v1/routes/bookRoutes";
import memberRoutes from "../src/api/v1/routes/memberRoutes";

// Initialize Express application
const app: Express = express();

// Apply basic Helmet security
app.use(getHelmetConfig());

app.use(cors(getCorsOptions()));

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

// API Routes.
app.use("/api/v1/books", bookRoutes);
app.use("/api/v1/members", memberRoutes);

// Setup Swagger
setupSwagger(app);

export default app;
