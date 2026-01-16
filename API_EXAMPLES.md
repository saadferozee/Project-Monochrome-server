# API Testing Examples

Use these examples to test the API with tools like Postman, Insomnia, or curl.

## Base URL
```
http://localhost:5000
```

---

## 🔐 Authentication

### 1. Register New User
```bash
POST http://localhost:5000/api/auth/register
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "password": "password123"
}
```

### 2. Login
```bash
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "admin@monochrome.com",
  "password": "admin123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "65f1234567890abcdef12345",
    "name": "Admin User",
    "email": "admin@monochrome.com",
    "role": "admin",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 3. Get Current User (Protected)
```bash
GET http://localhost:5000/api/auth/me
Authorization: Bearer YOUR_JWT_TOKEN_HERE
```

---

## 📦 Services

### 1. Get All Services
```bash
GET http://localhost:5000/api/services
```

### 2. Get Services by Category
```bash
GET http://localhost:5000/api/services?category=development
```

Available categories:
- `development`
- `design`
- `security`
- `optimization`
- `consulting`
- `maintenance`

### 3. Search Services
```bash
GET http://localhost:5000/api/services?search=website
```

### 4. Sort Services
```bash
# Sort by price (ascending)
GET http://localhost:5000/api/services?sort=price-asc

# Sort by price (descending)
GET http://localhost:5000/api/services?sort=price-desc

# Sort by name
GET http://localhost:5000/api/services?sort=name
```

### 5. Combined Filters
```bash
GET http://localhost:5000/api/services?category=development&sort=price-asc&search=api
```

### 6. Get Single Service by ID
```bash
GET http://localhost:5000/api/services/65f1234567890abcdef12345
```

### 7. Get Service by Slug
```bash
GET http://localhost:5000/api/services/slug/custom-website-development
```

### 8. Create New Service (Admin Only)
```bash
POST http://localhost:5000/api/services
Authorization: Bearer YOUR_ADMIN_JWT_TOKEN
Content-Type: application/json

{
  "name": "WordPress Development",
  "description": "Custom WordPress theme and plugin development",
  "fullDescription": "We create custom WordPress solutions tailored to your needs...",
  "price": 1299,
  "category": "development",
  "features": [
    "Custom theme development",
    "Plugin integration",
    "Responsive design",
    "SEO optimization"
  ],
  "deliveryTime": "3-4 weeks",
  "image": "/images/wordpress.jpg",
  "tags": ["wordpress", "cms", "php"]
}
```

### 9. Update Service (Admin Only)
```bash
PUT http://localhost:5000/api/services/65f1234567890abcdef12345
Authorization: Bearer YOUR_ADMIN_JWT_TOKEN
Content-Type: application/json

{
  "price": 1499,
  "deliveryTime": "2-3 weeks"
}
```

### 10. Delete Service (Admin Only)
```bash
DELETE http://localhost:5000/api/services/65f1234567890abcdef12345
Authorization: Bearer YOUR_ADMIN_JWT_TOKEN
```

---

## 🧪 Testing with curl

### Login and Save Token
```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@monochrome.com","password":"admin123"}'

# Save the token from response
TOKEN="your-jwt-token-here"
```

### Get Services
```bash
curl http://localhost:5000/api/services
```

### Create Service (with auth)
```bash
curl -X POST http://localhost:5000/api/services \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "Test Service",
    "description": "Test description",
    "fullDescription": "Full test description",
    "price": 999,
    "category": "development",
    "features": ["Feature 1", "Feature 2"],
    "deliveryTime": "1 week",
    "tags": ["test"]
  }'
```

---

## 📊 Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "count": 10  // For list endpoints
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description"
}
```

---

## 🔑 Common Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `401` - Unauthorized (missing or invalid token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Server Error

---

## 💡 Tips

1. **Save your JWT token** after login to use in protected routes
2. **Admin routes** require a user with `role: "admin"`
3. **Slugs are auto-generated** from service names (lowercase, hyphenated)
4. **Search is case-insensitive** and searches name, description, and tags
5. **All timestamps** are in ISO 8601 format
