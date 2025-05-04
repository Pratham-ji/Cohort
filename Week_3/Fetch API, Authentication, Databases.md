# Week 3.2 - Fetch API, Authentication, Databases

## Fetch API
- Alternative to Postman/Browser URL bar.
- Use JavaScript `fetch()` to make HTTP requests.

**Example:**
```js
fetch('https://fakerapi.it/api/v1/persons')
  .then(response => response.json())
  .then(data => console.log(data));
```

🔗 [Fetch API Example](https://gist.github.com/hkirat/ea4d132f70f69d1d47baac9eb3cc1313)

## 🔒 Authentication Overview
Authentication is crucial to restrict access to resources.

### Key Concepts:
- **Hashing:** One-way encryption (irreversible).
- **Encryption:** Two-way encryption (reversible).
- **JWTs (Json Web Tokens):** Sign information securely.
- **Local Storage:** Store tokens or preferences in the browser.

**Hashing Example:**
Input: `password123` ➝ Output: `adsfadsfa$@#` (can't be reversed)

**Encryption Example:**
- Encrypt using a key ➝ Decrypt using the same key.

**Signature (JWT Concept):**
- Verifies data authenticity.

## 🗝Typical Authentication Flow
1. User signs up/signs in ➝ Server returns a **JWT**.
2. Client saves token (in Local Storage or Cookies).
3. Client sends token in Authorization header with every request.

**Example POST Signin Request:**
```json
POST /signin
{
  "username": "test",
  "password": "password123"
}
```

Returns:
```json
{
  "token": "xyz.abc.def"
}
```

## 🛢 Databases Introduction
- Memory storage is temporary (bad for real-world apps).
- We need **databases** for persistent data.

## 🧩 Types of Databases
- Graph DBs
- Vector DBs
- SQL (Structured Query Language)
- NoSQL (Not Only SQL)

## 🗃 NoSQL Example: MongoDB
- Document-oriented
- Stores data in JSON-like format
- No predefined schema (schemaless)

### MongoDB Key Concepts:
- **Database ➝ Collections ➝ Documents**
- Collections are like tables.
- Documents are like rows.

🔗 [MongoDB Official Site](https://mongodb.com/)

## 🔌 Connecting Backend to Database
**Libraries Used:**
- `express`: Create HTTP server
- `jsonwebtoken`: Manage authentication
- `mongoose`: Connect backend to MongoDB

🔗 [Mongoose Official Site](https://mongoosejs.com/)

