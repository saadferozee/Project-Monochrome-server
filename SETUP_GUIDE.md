# 🚀 Quick Setup Guide

Follow these steps to get the backend running in minutes.

## Step 1: Install Dependencies

```bash
cd monochrome-web-solutions-backend
npm install
```

## Step 2: Set Up Environment Variables

Create a `.env` file:

```bash
cp .env.example .env
```

Then edit `.env` with your values:

### Option A: Local MongoDB
```env
MONGODB_URI=mongodb://localhost:27017/monochrome-web-solutions
PORT=5000
NODE_ENV=development
JWT_SECRET=your-random-secret-key-here
FRONTEND_URL=http://localhost:3000
```

### Option B: MongoDB Atlas (Cloud)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/monochrome-web-solutions?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
JWT_SECRET=your-random-secret-key-here
FRONTEND_URL=http://localhost:3000
```

**To get MongoDB Atlas URI:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database password

## Step 3: Seed the Database

Populate with sample services and test users:

```bash
npm run seed
```

You'll see:
```
✓ Connected to MongoDB
✓ Cleared existing data
✓ Inserted 10 services
✓ Inserted 2 users
✅ Database seeded successfully!

Test Credentials:
Admin: admin@monochrome.com / admin123
User:  user@test.com / test123
```

## Step 4: Start the Server

```bash
npm run dev
```

You should see:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 Server running in development mode
📡 Listening on port 5000
🌐 API URL: http://localhost:5000
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Step 5: Test the API

Open your browser or use curl:

```bash
# Health check
curl http://localhost:5000/api/health

# Get all services
curl http://localhost:5000/api/services

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@monochrome.com","password":"admin123"}'
```

## ✅ Verification Checklist

- [ ] Dependencies installed (`node_modules` folder exists)
- [ ] `.env` file created with MongoDB URI
- [ ] Database seeded successfully
- [ ] Server running on http://localhost:5000
- [ ] Health check returns success: http://localhost:5000/api/health
- [ ] Services endpoint works: http://localhost:5000/api/services

## 🐛 Troubleshooting

### "Cannot connect to MongoDB"
- **Local MongoDB**: Make sure MongoDB is running (`mongod`)
- **Atlas**: Check your connection string and network access settings

### "Port 5000 already in use"
- Change `PORT=5000` to another port in `.env` (e.g., `PORT=5001`)

### "JWT_SECRET is not defined"
- Make sure `.env` file exists and has `JWT_SECRET` set

### "Module not found"
- Run `npm install` again
- Delete `node_modules` and `package-lock.json`, then run `npm install`

## 📚 Next Steps

1. **Test the API** - Use the examples in `API_EXAMPLES.md`
2. **Connect Frontend** - Update frontend to use `http://localhost:5000`
3. **Customize Services** - Add your own services via the API
4. **Deploy** - Follow deployment guides for production

## 🔗 Useful Links

- [API Documentation](./README.md)
- [API Examples](./API_EXAMPLES.md)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Express.js Docs](https://expressjs.com/)

---

**Need help?** Check the README.md for detailed documentation.
