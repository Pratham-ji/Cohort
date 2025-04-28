# Week 3.1 - Middleware, Authentication, Global Catches, Zod

## 🏥 Hospital Analogy for Middlewares
Before reaching the doctor (final route handler), checks like insurance verification, blood test, and BP check are done. Similarly, in servers, we perform operations like authentication and validation before the main controller logic.

**Hospital Example Flow:**
- Insurance check
- Blood test (STD, blood pressure check)
- Only then meeting the doctor

## 🚀 Middlewares in Web Servers
Middlewares are functions that intercept incoming requests before reaching the main handler.

### Examples of Middlewares:
- Authentication check: Ensure the user has permission.
- Input validation: Validate request data (e.g., `kidneyId` should be 1-2).
- Logging, counting requests, measuring server response times.

### How to Implement Middlewares:
- Ugly way: Duplicate checks inside each route.
- Better way: Wrap logic with helper functions.
- Best way: **Middleware functions**.

```js
function authMiddleware(req, res, next) {
    if (!req.headers.username || !req.headers.password) {
        return res.status(403).send('Unauthorized');
    }
    next();
}
```

### Using Middleware Globally:
```js
app.use(authMiddleware);
```

## 🛡 Why Input Validation is Needed
Wrong input can crash or make your server behave badly.

### Problems:
- Missing fields
- Invalid data types

## 📦 Zod Library
Zod helps validate complex user inputs easily.

**Example:**
```js
const schema = z.object({
  kidneyId: z.number().min(1).max(2),
  username: z.string(),
  password: z.string()
});
```

🔗 [Zod Documentation](https://zod.dev/?id=basic-usage)

## 🔐 Authentication Basics
**Problem:** Anyone can send a request to your backend.

**Naive Solution:** Send username/password with every request.

**Better Solution:**
- User signs in once and receives a **Token**.
- User sends the token with every request.
- Server verifies the token.

## 📚 Library: `jsonwebtoken`
This library creates and verifies JWT tokens for authentication.

