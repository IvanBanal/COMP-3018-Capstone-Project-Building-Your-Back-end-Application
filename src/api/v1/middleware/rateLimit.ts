import rateLimit from "express-rate-limit";

/**
 * Global API rate limiter.
 * Limits each IP to 3 requests every 5 seconds (This is used for now due to testing purposes).
 */
export const globalLimiter = rateLimit({ // Calls the express-rate-limit package.
    // 1000 here is in milliseconds.
    windowMs: 5 * 1000, // 5 seconds.
    max: 3, // Maximum requests allowed during the above time window.
    message: {
        message: "Too many requests, please try again later."
    },
    standardHeaders: true, // Adds modern HTTP headers to response.
    legacyHeaders: false // Disables old/depracated headers. 
});
