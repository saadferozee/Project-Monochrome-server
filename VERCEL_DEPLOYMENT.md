# 🚀 Vercel Deployment Guide

Complete guide to deploy your Express.js backend to Vercel.

## 📋 Prerequisites

- GitHub account
- Vercel account (sign up at [vercel.com](https://vercel.com))
- MongoDB Atlas connection string
- Code pushed to GitHub repository

---

## 🔧 Step 1: Prepare Your Repository

### 1.1 Initialize Git (if not already done)

```bash
cd monochrome-web-solutions-backend
git init
git add .
git commit -m "Initial backend setup"
```

### 1.2 Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `monochrome-backend`)
3. **Don't** initialize with README (we already have files)

### 1.3 Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/monochrome-backend.git
git branch -M main
git push -u origin main
```

---

## 🌐 Step 2: Deploy to Vercel

### 2.1 Import Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Click **"Import"** next to your GitHub repository
4. Select `monochrome-web-solutions-backend` (or your repo name)

### 2.2 Configure Project

**Framework Preset:** Other (or leave as detected)

**Root Directory:** 
- If backend is in root: leave as `./`
- If backend is in subfolder: set to `monochrome-web-solutions-backend`

**Build Settings:**
- Build Command: (leave empty)
- Output Directory: (leave empty)
- Install Command: `npm install`

### 2.3 Add Environment Variables

Click **"Environment Variables"** and add these:

| Name | Value |
|------|-------|
| `MONGODB_URI` | Your MongoDB Atlas connection string from `.env` file |
| `JWT_SECRET` | Your JWT secret from `.env` file |
| `NODE_ENV` | `production` |
| `FRONTEND_URL` | `https://your-frontend-domain.vercel.app` (update later) |

**Important:** Make sure to add these for **Production**, **Preview**, and **Development** environments.

### 2.4 Deploy

Click **"Deploy"** and wait for the build to complete (usually 1-2 minutes).

---

## ✅ Step 3: Verify Deployment

Once deployed, you'll get a URL like: `https://your-project.vercel.app`

### Test Your API

```bash
# Health check
curl https://your-project.vercel.app/api/health

# Get services
curl https://your-project.vercel.app/api/services

# Login
curl -X POST https://your-project.vercel.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@monochrome.com","password":"admin123"}'
```

---

## 🗄️ Step 4: Seed the Database

You need to seed the database with initial data. You have two options:

### Option A: Run Seed Script Locally

```bash
# Make sure .env has your MongoDB URI
npm run seed
```

### Option B: Create a Seed API Endpoint (Temporary)

Add this to your `server.js` temporarily:

```javascript
// Temporary seed endpoint (remove after use)
app.get('/api/seed-database', async (req, res) => {
  try {
    // Import seed logic here or call seed function
    res.json({ message: 'Database seeded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

Then visit: `https://your-project.vercel.app/api/seed-database`

**Remember to remove this endpoint after seeding!**

---

## 🔄 Step 5: Update Frontend URL

After deploying your frontend:

1. Go to Vercel Dashboard → Your Backend Project
2. Click **"Settings"** → **"Environment Variables"**
3. Update `FRONTEND_URL` to your frontend's Vercel URL
4. Click **"Save"**
5. Redeploy (Vercel will auto-redeploy on save)

---

## 📝 Step 6: Update Frontend API URL

In your Next.js frontend, update API calls to use your Vercel backend URL:

```javascript
// Before (local)
const API_URL = 'http://localhost:5000';

// After (production)
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://your-backend.vercel.app';
```

Add to your frontend `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://your-backend.vercel.app
```

---

## 🔧 Troubleshooting

### "Function Timeout"
Vercel has a 10-second timeout for serverless functions on free tier.
- Optimize database queries
- Add indexes to MongoDB collections
- Consider upgrading Vercel plan if needed

### "Cannot connect to MongoDB"
- Check MongoDB Atlas network access (allow all IPs: `0.0.0.0/0`)
- Verify connection string in environment variables
- Check MongoDB Atlas cluster is running

### "CORS Error"
- Make sure `FRONTEND_URL` is set correctly in Vercel environment variables
- Update CORS settings in `server.js` if needed

### "Module not found"
- Make sure all dependencies are in `package.json` (not devDependencies)
- Redeploy the project

---

## 🎯 Custom Domain (Optional)

### Add Custom Domain

1. Go to Project Settings → **Domains**
2. Add your domain (e.g., `api.monochrome.com`)
3. Follow DNS configuration instructions
4. Update `FRONTEND_URL` in environment variables

---

## 🔐 Security Checklist

- [x] Environment variables set in Vercel (not in code)
- [x] `.env` file in `.gitignore`
- [x] Strong JWT secret
- [x] MongoDB network access configured
- [x] CORS properly configured
- [ ] Rate limiting added (optional)
- [ ] API key authentication (optional)

---

## 📊 Monitoring

### View Logs

1. Go to Vercel Dashboard → Your Project
2. Click **"Deployments"**
3. Click on a deployment → **"Functions"** tab
4. View logs for debugging

### Analytics

Vercel provides built-in analytics:
- Request count
- Response times
- Error rates

---

## 🚀 Continuous Deployment

Vercel automatically deploys when you push to GitHub:

```bash
# Make changes
git add .
git commit -m "Update API"
git push

# Vercel automatically deploys!
```

---

## 📚 Useful Commands

```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy from CLI
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs

# List deployments
vercel ls
```

---

## 🎉 You're Done!

Your backend is now live on Vercel! 

**Your API URL:** `https://your-project.vercel.app`

**Next Steps:**
1. Test all endpoints
2. Seed the database
3. Deploy your frontend
4. Update frontend to use production API URL
5. Test the full application

---

## 📞 Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [MongoDB Atlas Support](https://www.mongodb.com/support)

---

**Deployment Status:** Ready to deploy! 🚀
