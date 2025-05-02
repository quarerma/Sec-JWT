# NestJS Project - Authentication Example

This project is a basic NestJS API with authentication, including login and a protected route requiring a bearer token.

## 🚀 Getting Started

### 1. Clone the repository and install dependencies

git clone https://github.com/quarerma/Sec-JWT.git cd your-nestjs-project npm install

### 2. Start the server

npm run start:dev

The server will start on http://localhost:3000.

---

## 🔐 Authentication

### Login Endpoint

- URL: http://localhost:3000/auth/login
- Method: POST
- Body:

{ "name": "Reader", "password": "readerPass123" }

### ✅ Valid Login (Will Work)

curl -X POST http://localhost:3000/auth/login \
 -H "Content-Type: application/json" \
 -d '{"name": "Reader", "password": "readerPass123"}'

This will return a response like:

{ "access_token": "your.jwt.token.here" }

### ❌ Invalid Login (Wrong Password)

curl -X POST http://localhost:3000/auth/login \
 -H "Content-Type: application/json" \
 -d '{"name": "Reader", "password": "wrongPassword"}'

This will return an error like:

{ "statusCode": 401, "message": "Invalid credentials", "error": "Unauthorized" }

---

## 🛡️ Access Protected Route

Use the token from the valid login response.

### Protected Route

- URL: http://localhost:3000/user/permission
- Method: GET
- Header: Authorization: Bearer <your-token>

### 🧪 cURL Example

curl -X GET http://localhost:3000/user/permission \
 -H "Authorization: Bearer YOUR_ACCESS_TOKEN"

Replace YOUR_ACCESS_TOKEN with the actual token received during login.
