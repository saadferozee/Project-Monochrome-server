# Monochrome Web Solutions - Backend API

Simple Express.js backend with MongoDB, all in one file.

## Quick Start

```bash
npm install
npm run dev
```

## Environment Variables

Create `.env` file:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your_secret_key
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
PORT=5000
```

## API Endpoints

### Auth
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Services
- `GET /api/services` - Get all services
- `GET /api/services/slug/:slug` - Get service by slug
- `POST /api/services` - Create service (admin)
- `PUT /api/services/:id` - Update service (admin)
- `DELETE /api/services/:id` - Delete service (admin)

### Bookings
- `POST /api/bookings` - Create booking (public)
- `GET /api/bookings` - Get all bookings (admin)
- `GET /api/bookings/stats` - Get statistics (admin)
- `GET /api/bookings/my-bookings` - Get user bookings (protected)
- `PUT /api/bookings/:id` - Update booking (admin)
- `DELETE /api/bookings/:id` - Delete booking (admin)

## Test Users

```javascript
// Admin
email: admin@monochrome.com
password: admin123

// User
email: user@test.com
password: test123
```

## Deploy to Vercel

```bash
git push origin main
```

Vercel will auto-deploy. Set environment variables in Vercel dashboard.

## Production URL

https://project-monochrome-server.vercel.app
