# Monochrome Web Solutions - Backend API

Express.js REST API with MongoDB for the Monochrome Web Solutions platform.

## 🚀 Features

- **Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control (User/Admin)
  - Secure password hashing with bcrypt

- **Service Management**
  - CRUD operations for web services
  - Category filtering
  - Search functionality
  - Slug-based URLs

- **Security**
  - CORS configuration
  - Input validation
  - Protected routes
  - Error handling

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## 🛠️ Installation

1. **Navigate to backend directory**
   ```bash
   cd monochrome-web-solutions-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

4. **Configure your `.env` file**
   ```env
   # MongoDB Connection
   MONGODB_URI=mongodb://localhost:27017/monochrome-web-solutions
   # OR for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/monochrome-web-solutions

   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # JWT Secret (generate a random string)
   JWT_SECRET=your-super-secret-jwt-key-change-this

   # Frontend URL (for CORS)
   FRONTEND_URL=http://localhost:3000
   ```

5. **Seed the database** (optional but recommended)
   ```bash
   npm run seed
   ```

6. **Start the server**
   ```bash
   # Development mode with auto-reload
   npm run dev

   # Production mode
   npm start
   ```

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| POST | `/api/auth/register` | Register new user | Public |
| POST | `/api/auth/login` | Login user | Public |
| GET | `/api/auth/me` | Get current user | Private |

### Service Routes (`/api/services`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|--------|
| GET | `/api/services` | Get all services | Public |
| GET | `/api/services/:id` | Get service by ID | Public |
| GET | `/api/services/slug/:slug` | Get service by slug | Public |
| POST | `/api/services` | Create new service | Admin |
| PUT | `/api/services/:id` | Update service | Admin |
| DELETE | `/api/services/:id` | Delete service | Admin |

### Query Parameters for GET `/api/services`

- `category` - Filter by category (development, design, security, optimization, consulting, maintenance)
- `search` - Search in name, description, and tags
- `sort` - Sort results (price-asc, price-desc, name, or default: newest)

Example: `/api/services?category=development&sort=price-asc`

## 🔐 Authentication

### Register
```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

### Response
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "token": "jwt-token-here"
  }
}
```

### Using Protected Routes
Include the JWT token in the Authorization header:
```bash
Authorization: Bearer your-jwt-token-here
```

## 🧪 Test Credentials

After running `npm run seed`, use these credentials:

**Admin Account:**
- Email: `admin@monochrome.com`
- Password: `admin123`

**User Account:**
- Email: `user@test.com`
- Password: `test123`

## 📦 Project Structure

```
monochrome-web-solutions-backend/
├── config/
│   └── database.js          # MongoDB connection
├── controllers/
│   ├── authController.js    # Authentication logic
│   └── serviceController.js # Service CRUD logic
├── middleware/
│   ├── auth.js             # JWT authentication
│   └── errorHandler.js     # Global error handling
├── models/
│   ├── User.js             # User schema
│   └── Service.js          # Service schema
├── routes/
│   ├── authRoutes.js       # Auth endpoints
│   └── serviceRoutes.js    # Service endpoints
├── scripts/
│   └── seed.js             # Database seeding
├── .env.example            # Environment variables template
├── .gitignore
├── package.json
├── README.md
└── server.js               # Entry point
```

## 🗄️ Database Models

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (user/admin),
  isActive: Boolean,
  timestamps: true
}
```

### Service Model
```javascript
{
  name: String,
  slug: String (unique),
  description: String,
  fullDescription: String,
  price: Number,
  category: String,
  features: [String],
  deliveryTime: String,
  image: String,
  isActive: Boolean,
  tags: [String],
  timestamps: true
}
```

## 🔧 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data

## 🌐 CORS Configuration

The API is configured to accept requests from:
- `http://localhost:3000` (default Next.js dev server)
- Custom frontend URL (set in `.env`)

## 🐛 Error Handling

All errors return a consistent format:
```json
{
  "success": false,
  "message": "Error message here"
}
```

## 📝 Notes

- All passwords are hashed using bcrypt before storage
- JWT tokens expire after 30 days
- Services support text search on name, description, and tags
- Slugs are auto-generated from service names

## 🚀 Deployment

### Quick Deploy to Vercel

This backend is configured for Vercel deployment. See detailed guides:
- **Quick Start**: `QUICK_DEPLOY.md` (5-minute setup)
- **Full Guide**: `VERCEL_DEPLOYMENT.md` (complete instructions)

**TL;DR:**
1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy!

### Environment Variables for Production
Make sure to set these in your production environment:
- `MONGODB_URI` - Your production MongoDB connection string
- `JWT_SECRET` - Strong random secret key
- `NODE_ENV=production`
- `FRONTEND_URL` - Your production frontend URL

### Recommended Hosting
- **API**: Vercel (recommended), Railway, Render, Heroku, or DigitalOcean
- **Database**: MongoDB Atlas (free tier available)

## 📄 License

ISC
