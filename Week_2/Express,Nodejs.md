# Week 2.2 - Express & Node.js: Detailed Notes

##  What You Will Learn
- ECMAScript and JavaScript
- Node.js and Bun
- Node.js Runtime
- What is an HTTP Server?
- Client-Server Communication using HTTP
- HTTP Methods and Status Codes
- Introduction to Express.js

---

## 🌐 What is ECMAScript?
ECMAScript is the **standard specification** that defines how JavaScript should work. JavaScript is the **implementation** of ECMAScript used in browsers and other runtimes.

🔗 [ECMAScript Spec](https://tc39.es/ecma262/#sec-numbers-and-dates)

---

## 💻 What is JavaScript?
JavaScript is a **high-level, interpreted scripting language**. Initially created for the frontend (browser), it has now evolved to support backend development via runtimes like **Node.js** and **Bun**.

---

## ⚙️ What is Node.js?
- Node.js is a **runtime environment** for executing JavaScript code **outside the browser**.
- Built on **V8 Engine** (used by Chrome), written in C++.
- Adds capabilities like:
  - File System access (`fs.readFile`)
  - Timers (`setTimeout`)
  - Network operations
- Used to build **CLI tools, games, servers**, etc.

### 🧠 Example:
```js
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

## 🚀 What is Bun?
- Bun is a **newer JavaScript runtime**.
- Built with **Zig**, known for **high speed**.
- Competes with Node.js by offering:
  - Faster execution
  - Built-in bundler
  - Native module support

🔗 [Bun on GitHub](https://github.com/oven-sh/bun)

---

## 🌍 Understanding Frontend vs Backend
- **Frontend**: HTML, CSS, JS (Runs in browser).
- **Backend**: Server-side logic, database access (Runs on server using Node.js).

---

## 🔌 What is an HTTP Server?
An **HTTP Server** listens to HTTP requests (like from a browser) and sends back responses.

Think of it as:
- Client (browser) sends a request (like calling a function)
- Server processes it and sends a result back (like return value)

---

## 🔄 HTTP Protocol Flow

### Client Side:
1. Parses the URL
2. Performs DNS lookup (e.g., `google.com` ➝ IP)
3. Connects to the server (TCP handshake)
4. Sends request

### Server Side:
1. Receives request
2. Reads route, headers, and body
3. Processes logic
4. Sends back headers, status code, and response body

---

## ✉️ HTTP Methods
Used by clients to **describe the action** they want to perform.

| Method | Description                     |
|--------|---------------------------------|
| GET    | Fetch data                      |
| POST   | Send data to server             |
| PUT    | Update existing data            |
| DELETE | Remove data                     |

---

## ⚠️ HTTP Status Codes

| Code | Meaning                    |
|------|----------------------------|
| 200  | OK                         |
| 404  | Not Found                  |
| 403  | Forbidden (Auth issue)     |
| 500  | Internal Server Error      |

📌 **Why are they important?**
They help standardize communication between client and server.

---

## 🛠 Why So Many Methods and Headers?
- These are **web standards**.
- Makes communication consistent and scalable.
- Each part has a purpose:
  - **Body**: Data sent by client
  - **Headers**: Metadata
  - **Query Params**: Filters, identifiers, etc.

---

## 🧪 How to Create an HTTP Server?

### Old Way (C/C++): Very low-level, fast but complex.

### Modern Way: Use Node.js with Express.js

---

## 🚂 Express.js — The Simplified Server Library
**Express.js** is a lightweight framework built on top of Node.js for handling HTTP requests.

### 🌟 Hello World Example:
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

📎 [Express Starter Guide](https://expressjs.com/en/starter/hello-world.html)

---

## 🧠 Bonus: DNS Resolution
Just like your phone maps a contact name to a number,
**DNS maps domain names to IP addresses**.

e.g., `chatgpt.com ➝ 104.20.190.5`

---

## 📚 Summary
- Node.js extends JavaScript to server-side
- HTTP is the core of web communication
- Express makes backend development faster and easier
- Understanding protocols helps in building robust applications

---

> “The backend is just JavaScript + logic + communication. Learn to think like the server!”


