# NestJS Project - Authentication Example

This project is a basic NestJS API implementing authentication and permission levels for a blog website.  
Users can have different roles such as **Reader**, **Writer**, or **Super Admin**.  
The system uses **JWT (JSON Web Token)** as the authentication mechanism to securely encode user identity and role information.  
Its primary purpose is to demonstrate how permission levels work using role-based access control with JWT.

## 🚀 Getting Started

### 1. Clone the repository and install dependencies

```bash
git clone https://github.com/quarerma/Sec-JWT.git
```

Go to folder

```bash
cd Sec-JWT
```

Install

```bash
 npm install
```

### 2. Start the server

```bash
npm run start:dev
```

The server will start on http://localhost:3000.

---

## 🔐 Authentication

### Login Endpoint

- URL: http://localhost:3000/auth/login
- Method: POST
- Body:

{ "name": "Reader", "password": "readerPass123" }

### ✅ Valid Login (Will Work)

```bash
curl -X POST http://localhost:3000/auth/login \
 -H "Content-Type: application/json" \
 -d '{"name": "Reader", "password": "readerPass123"}'
```

This will return a response like:

{ "token": "jwt_token_response" }

### ❌ Invalid Login (Wrong Password)

```bash
curl -X POST http://localhost:3000/auth/login \
 -H "Content-Type: application/json" \
 -d '{"name": "Reader", "password": "wrongPassword"}'
```

This will return an error like:

{ "statusCode": 401, "message": "Invalid credentials", "error": "Unauthorized" }

---

## 🛡️ Access Protected Route

Use the token from the valid login response.

### Protected Route

- URL: http://localhost:3000/user/permission
- Method: GET
- Header: Authorization: Bearer <jwt-token>

```bash
curl -X GET http://localhost:3000/user/permission \
 -H "Authorization: Bearer JWT_ACCESS_TOKEN"
```

Replace JWT_ACCESS_TOKEN with the actual token received during login.

Replace `JWT_ACCESS_TOKEN` with the actual token received during login.

### 🎟️ Example Tokens

#### Reader Token

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmVhZGVyIiwiZW1haWwiOiJyZWFkZXJAZXhhbXBsZS5jb20iLCJyb2xlIjoiUmVhZGVyIiwiaWF0IjoxNzQ2MjA1OTY4fQ.Hg4W3LmakiWXVYlH1nL_jRW5rTpSCqUgAOXCx7lbs5I
```

#### Writer Token

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiV3JpdGVyIiwiZW1haWwiOiJ3cml0ZXJAZXhhbXBsZS5jb20iLCJyb2xlIjoiV3JpdGVyIiwiaWF0IjoxNzQ2MjA1OTgzfQ.3FMkntllngbbLqI42Y9aPixUSAHs9dAAh4nOOZFWdfo
```

#### SuperAdmin Token

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3VwZXJBZG1pbiIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJyb2xlIjoiU3VwZXJBZG1pbiIsImlhdCI6MTc0NjIwNjAwMH0.QqACIF98ed0Oj-rIQCqN6-b8pHUmMxObLQ2FY02Tqa0
```
