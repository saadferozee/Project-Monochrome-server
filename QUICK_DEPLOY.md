# ⚡ Quick Deploy to Vercel

## 🚀 5-Minute Deployment

### 1️⃣ Push to GitHub

```bash
cd monochrome-web-solutions-backend
git init
git add .
git commit -m "Backend ready for deployment"
git remote add origin https://github.com/YOUR_USERNAME/monochrome-backend.git
git push -u origin main
```

### 2️⃣ Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Click **Deploy** (don't change any settings yet)

### 3️⃣ Add Environment Variables

After first deployment, go to **Settings** → **Environment Variables** and add:

```
MONGODB_URI=<your-mongodb-connection-string>

JWT_SECRET=<your-jwt-secret>

NODE_ENV=production

FRONTEND_URL=http://localhost:3000
```

**Copy these values from your `.env` file**

Click **Save** → Vercel will auto-redeploy.

### 4️⃣ Seed Database

Run locally (one time only):
```bash
npm run seed
```

### 5️⃣ Test Your API

```bash
curl https://your-project.vercel.app/api/health
curl https://your-project.vercel.app/api/services
```

---

## ✅ Done!

Your backend is live at: `https://your-project.vercel.app`

**Test Credentials:**
- Admin: `admin@monochrome.com` / `admin123`
- User: `user@test.com` / `test123`

---

## 🔄 Update Frontend

In your Next.js app, set:
```env
NEXT_PUBLIC_API_URL=https://your-project.vercel.app
```

---

## 📝 Important Notes

- ✅ `vercel.json` is already configured
- ✅ `server.js` is Vercel-ready
- ✅ MongoDB Atlas allows all IPs (check if needed)
- ✅ CORS is configured
- ⚠️ Update `FRONTEND_URL` after deploying frontend

---

**Need detailed instructions?** See `VERCEL_DEPLOYMENT.md`
