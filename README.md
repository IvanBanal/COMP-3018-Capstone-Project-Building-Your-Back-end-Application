# Library Management API

## Project Overview

This **Library Management API** is designed to manage books and members within a library system. It provides endpoints to
CREATE, GET, UPDATE, and DELETE both books and members.

The API solves the problem of manually tracking library resources and allows developers to integrate a management system into 
their applications.

It is suitable for applications such as school libraries, public library systems, or digital book tracking platforms.

--- 

## Installation Instructions

### Prerequisites

- Node.js **v24.x** or later
- npm **v11.x** or later

### Steps

1. **Clone the repository, install dependencies, configure .env, and run the server**

```bash
# Clone the repository
git clone https://github.com/IvanBanal/COMP-3018-Capstone-Project-Building-Your-Back-end-Application
cd COMP-3018-Capstone-Project-Building-Your-Back-end-Application
```

```bash
# Install dependencies
npm install
```

```bash
# Copy example environment file
cp .env.example .env
```

```bash
# Environment variable setup
Edit .env and set the required variables
Example:
PORT=3000
ALLOWED_ORIGINS=http://localhost:3000
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
SWAGGER_SERVER_URL=http://localhost:3000/api-docs
```

```bash
# Run the server
npm run start
```

```bash
Server runs at: http://localhost:3000/api/v1

Health check endpoint: http://localhost:3000/api/v1/health
```

# Book API Endpoints

## 1. Create Book
```bash
curl -X POST http://localhost:3000/api/v1/books \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-token>" \
  -d '{
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "genre": "Programming",
    "isbn": "9780132350884",
    "totalCopies": 10,
    "availableCopies": 10,
    "publishedYear": 2008,
    "description": "A handbook of agile software craftsmanship."
  }'

  Response (201 Created)
  {
  "message": "Book created",
  "data": {
    "id": "book_000001",
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "genre": "Programming",
    "isbn": "9780132350884",
    "totalCopies": 10,
    "availableCopies": 10,
    "publishedYear": 2008,
    "description": "A handbook of agile software craftsmanship.",
    "availability": true,
    "createdAt": "2026-01-01T10:00:00Z",
    "updatedAt": "2026-01-01T10:00:00Z"
  }
}
```

## 2. Get All Books
```bash
curl -X GET http://localhost:3000/api/v1/books \
  -H "Authorization: Bearer <your-token>"

Response (200 OK)
{
  "message": "Books retrieved",
  "count": 1,
  "data": [
    {
      "id": "book_000001",
      "title": "Clean Code",
      "author": "Robert C. Martin",
      "genre": "Programming",
      "isbn": "9780132350884",
      "totalCopies": 10,
      "availableCopies": 10,
      "publishedYear": 2008,
      "description": "A handbook of agile software craftsmanship.",
      "availability": true,
      "createdAt": "2026-01-01T10:00:00Z",
      "updatedAt": "2026-01-01T10:00:00Z"
    }
  ]
}
```

## 3. Get Book by ID
```bash
curl -X GET http://localhost:3000/api/v1/books/book_000001 \
  -H "Authorization: Bearer <your-token>"

Response (200 OK)
{
  "message": "Book retrieved",
  "data": {
    "id": "book_000001",
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "genre": "Programming",
    "isbn": "9780132350884",
    "totalCopies": 10,
    "availableCopies": 10,
    "publishedYear": 2008,
    "description": "A handbook of agile software craftsmanship.",
    "availability": true,
    "createdAt": "2026-01-01T10:00:00Z",
    "updatedAt": "2026-01-01T10:00:00Z"
  }
}
```

## 4 Update Book
```bash
curl -X PUT http://localhost:3000/api/v1/books/book_000001 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-token>" \
  -d '{
    "title": "Updated Clean Code",
    "availableCopies": 8
  }'

Response (200 OK)
{
  "message": "Book updated",
  "data": {
    "id": "book_000001",
    "title": "Updated Clean Code",
    "author": "Robert C. Martin",
    "genre": "Programming",
    "isbn": "9780132350884",
    "totalCopies": 10,
    "availableCopies": 8,
    "publishedYear": 2008,
    "description": "A handbook of agile software craftsmanship.",
    "availability": true,
    "createdAt": "2026-01-01T10:00:00Z",
    "updatedAt": "2026-01-05T12:00:00Z"
  }
}
```

## 5. Delete Book
```bash
curl -X DELETE http://localhost:3000/api/v1/books/book_000001 \
  -H "Authorization: Bearer <your-token>"

Response (200 OK)
{
  "message": "Book deleted"
}
```

# Members API Endpoints

## 1. Create Member 
```bash
curl -X POST http://localhost:3000/api/v1/members \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-token>" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "membershipDate": "2026-01-01T10:00:00Z",
    "status": "active",
    "borrowLimit": 5,
    "phoneNumber": "1234567890",
    "address": "123 Main St, Winnipeg",
    "booksBorrowed": []
  }'

Response (201 Created)
{
  "message": "Member created",
  "data": {
    "id": "member_000001",
    "name": "John Doe",
    "email": "john@example.com",
    "membershipDate": "2026-01-01T10:00:00Z",
    "status": "active",
    "borrowLimit": 5,
    "phoneNumber": "1234567890",
    "address": "123 Main St, Winnipeg",
    "booksBorrowed": [],
    "createdAt": "2026-01-01T10:00:00Z",
    "updatedAt": "2026-01-01T10:00:00Z"
  }
}
```

## 2. Get All Members
```bash
curl -X GET http://localhost:3000/api/v1/members \
  -H "Authorization: Bearer <your-token>"

Response (200 OK)
{
  "message": "Members retrieved",
  "count": 1,
  "data": [
    {
      "id": "member_000001",
      "name": "John Doe",
      "email": "john@example.com",
      "membershipDate": "2026-01-01T10:00:00Z",
      "status": "active",
      "borrowLimit": 5,
      "phoneNumber": "1234567890",
      "address": "123 Main St, Winnipeg",
      "booksBorrowed": [],
      "createdAt": "2026-01-01T10:00:00Z",
      "updatedAt": "2026-01-01T10:00:00Z"
    }
  ]
}
```

## 3. Get Member by ID
```bash
curl -X GET http://localhost:3000/api/v1/members/member_000001 \
  -H "Authorization: Bearer <your-token>"

Response (200 OK)
{
  "message": "Member retrieved",
  "data": {
    "id": "member_000001",
    "name": "John Doe",
    "email": "john@example.com",
    "membershipDate": "2026-01-01T10:00:00Z",
    "status": "active",
    "borrowLimit": 5,
    "phoneNumber": "1234567890",
    "address": "123 Main St, Winnipeg",
    "booksBorrowed": [],
    "createdAt": "2026-01-01T10:00:00Z",
    "updatedAt": "2026-01-01T10:00:00Z"
  }
}
```

## 4. Update Member
```bash
curl -X PUT http://localhost:3000/api/v1/members/member_000001 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <your-token>" \
  -d '{
    "name": "John Updated Doe",
    "borrowLimit": 10
  }'

Response (200 OK)
{
  "message": "Member updated",
  "data": {
    "id": "member_000001",
    "name": "John Updated Doe",
    "email": "john@example.com",
    "membershipDate": "2026-01-01T10:00:00Z",
    "status": "active",
    "borrowLimit": 10,
    "phoneNumber": "1234567890",
    "address": "123 Main St, Winnipeg",
    "booksBorrowed": [],
    "createdAt": "2026-01-01T10:00:00Z",
    "updatedAt": "2026-01-05T12:00:00Z"
  }
}
```

## 5. Delete Member
```bash
curl -X DELETE http://localhost:3000/api/v1/members/member_000001 \
  -H "Authorization: Bearer <your-token>"

Response (200 OK)
{
  "message": "Member deleted"
}
```


# API Documentation

Full documentation is available at:


Swagger UI (local):
http://localhost:3000/api-docs