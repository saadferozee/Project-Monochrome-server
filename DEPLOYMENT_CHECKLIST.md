# ✅ Deployment Checklist

Complete this checklist before and after deploying to Vercel.

## 📋 Pre-Deployment

### Local Setup
- [x] Dependencies installed (`npm install`)
- [x] `.env` file created with MongoDB URI
- [x] Local server runs successfully (`npm run dev`)
- [x] Database seeded with sample data (`npm run seed`)
- [x] All API endpoints tested locally

### MongoDB Atlas
- [ ] Cluster is running
- [ ] Network access allows `0.0.0.0/0` (all IPs)
- [ ] Database user has read/write permissions
- [ ] Connection string is correct
- [ ] Database contains seeded data

### Code Preparation
- [x] `vercel.json` configuration file exists
- [x] `server.js` exports app for Vercel
- [x] `.gitignore` includes `.env`
- [x] All dependencies in `package.json`
- [x] No hardcoded secrets in code

### Git & GitHub
- [ ] Git repository initialized
- [ ] All files committed
- [ ] Repository pushed to GitHub
- [ ] `.env` file NOT in repository (check!)

---

## 🚀 Deployment Steps

### 1. Vercel Setup
- [ ] Vercel account created
- [ ] GitHub connected to Vercel
- [ ] Repository imported to Vercel

### 2. Environment Variables
Add these in Vercel Dashboard → Settings → Environment Variables:

- [ ] `MONGODB_URI` = Copy from your `.env` file
- [ ] `JWT_SECRET` = Copy from your `.env` file
- [ ] `NODE_ENV` = `production`
- [ ] `FRONTEND_URL` = `http://localhost:3000` (update after frontend deployment)

### 3. Deploy
- [ ] Click "Deploy" button
- [ ] Wait for build to complete
- [ ] Check deployment logs for errors

---

## ✅ Post-Deployment

### Verify Deployment
- [ ] Deployment successful (green checkmark)
- [ ] Deployment URL accessible
- [ ] No build errors in logs

### Test API Endpoints

Test these URLs (replace with your Vercel URL):

#### Health Check
```bash
curl https://your-project.vercel.app/api/health
```
- [ ] Returns `{"success": true, "message": "Server is running"}`

#### Get Services
```bash
curl https://your-project.vercel.app/api/services
```
- [ ] Returns array of services
- [ ] Status code 200

#### Login
```bash
curl -X POST https://your-project.vercel.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@monochrome.com","password":"admin123"}'
```
- [ ] Returns user data with JWT token
- [ ] Status code 200

#### Get Single Service
```bash
curl https://your-project.vercel.app/api/services/slug/custom-website-development
```
- [ ] Returns service details
- [ ] Status code 200

### Database Check
- [ ] MongoDB Atlas shows active connections
- [ ] Database contains seeded data
- [ ] No connection errors in Vercel logs

---

## 🔧 Configuration Updates

### After Frontend Deployment
- [ ] Update `FRONTEND_URL` in Vercel environment variables
- [ ] Redeploy backend (automatic after env var change)
- [ ] Test CORS from frontend

### Custom Domain (Optional)
- [ ] Add custom domain in Vercel
- [ ] Configure DNS records
- [ ] SSL certificate active
- [ ] Update API URL in frontend

---

## 📊 Monitoring

### Set Up Monitoring
- [ ] Check Vercel Analytics dashboard
- [ ] Review function logs
- [ ] Monitor MongoDB Atlas metrics
- [ ] Set up error alerts (optional)

### Regular Checks
- [ ] API response times acceptable
- [ ] No 500 errors in logs
- [ ] Database connections stable
- [ ] Storage usage within limits

---

## 🐛 Troubleshooting

If something doesn't work:

### Check Vercel Logs
1. Go to Vercel Dashboard
2. Click on your project
3. Click "Deployments"
4. Click latest deployment
5. Click "Functions" tab
6. Review logs for errors

### Common Issues

**"Cannot connect to MongoDB"**
- [ ] Check MongoDB Atlas network access
- [ ] Verify connection string in env vars
- [ ] Check MongoDB cluster is running

**"CORS Error"**
- [ ] Verify `FRONTEND_URL` is set correctly
- [ ] Check CORS configuration in `server.js`

**"Function Timeout"**
- [ ] Optimize database queries
- [ ] Add indexes to MongoDB
- [ ] Consider upgrading Vercel plan

**"Module not found"**
- [ ] Check all dependencies in `package.json`
- [ ] Redeploy project

---

## 📝 Documentation

### Update Documentation
- [ ] Add production API URL to README
- [ ] Document any configuration changes
- [ ] Update API examples with production URL

### Share with Team
- [ ] Share Vercel deployment URL
- [ ] Share test credentials
- [ ] Share MongoDB Atlas access (if needed)

---

## 🎯 Final Verification

### Complete System Test
- [ ] Frontend can connect to backend
- [ ] User registration works
- [ ] User login works
- [ ] Services list loads
- [ ] Service details load
- [ ] Protected routes work (if implemented)
- [ ] Admin functions work (if implemented)

### Performance Check
- [ ] API response time < 2 seconds
- [ ] No memory issues
- [ ] No timeout errors
- [ ] Database queries optimized

---

## 🎉 Deployment Complete!

Once all items are checked:

✅ **Backend is live and operational!**

**Your API URL:** `https://your-project.vercel.app`

**Test Credentials:**
- Admin: `admin@monochrome.com` / `admin123`
- User: `user@test.com` / `test123`

---

## 📞 Support Resources

- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Mongoose Docs](https://mongoosejs.com/docs/)

---

**Last Updated:** Ready for deployment
**Status:** ✅ All systems go!
