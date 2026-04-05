# New Component Research and Planning

## Selected Componenet: Express-rate-limit for Basic Rate Limiting - Adds rate limiting to endpoints to control API usage.

---

## Overview
The selected new component for this project is rate limiting using the express-rate-limit middleware. This component helps control.
the number of requests a client/user can make to the API within a specified time window.

---

## Purpose
The purpose of implementing rate limmitiing is to:

- Protect the API from request abuse such as spam requests or brute-force attacks.
- Improve overall API stability and performance.
- Enchance security by limiting excessive requests to sensitive endpoints like authentication routes.

---

## Why this component was chosen

This component was chosen because:

- It is simple to implment and requires minimal changes to existing project structure.
- Provides immediate security benefits for the project.
- Fits well within the project timeline.
- Does not require external services.

---

## How it will be used in the Library API

Rate limiting will be applied in the following ways:

### Global API Protection.

- Limits the total number of requests to each endpoint to 100 requests per 15 minutes (Can be adjusted if needed). 

### Sensitive Routes.

Stricter limits can be applied to:

- Authentication routes that require higher roles like admin. 

This ensures users cannot spam requests and helps maintain system stability.
