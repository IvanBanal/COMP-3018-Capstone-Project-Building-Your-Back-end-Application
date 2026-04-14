import rateLimit from "express-rate-limit";

/**
 * Global API rate limiter.
 * Limits each IP to 3 requests every 30 seconds (This is used for now due to testing purposes).
 */
export const globalLimiter = rateLimit({ // Calls the express-rate-limit package.
    // 1000 here is in milliseconds.
    windowMs: 30 * 1000, // 30 seconds.
    max: 3, // Maximum requests allowed during the above time window.
    message: {
        message: "Too many requests, please try again later."
    },
    standardHeaders: true, // Adds modern HTTP headers to response.
    legacyHeaders: false // Disables old/depracated headers. 
});

/**
 * Strict limiter for sensitive/admin routes.
 * Limits each IP to 3 requests every 15 seconds (This is used for now due to testing purposes).
 */
export const strictLimiter = rateLimit({
    windowMs: 15 * 1000, // 15 seconds.
    max: 3,
    message: {
        message: "Too many sensitive requests, please slow down."
    },
    standardHeaders: true,
    legacyHeaders: false

});
