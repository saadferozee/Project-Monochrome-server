# 🗄️ MongoDB Atlas Setup for Vercel

## Important: Network Access Configuration

When deploying to Vercel, you need to allow Vercel's IP addresses to access your MongoDB Atlas cluster.

## 🔧 Configure Network Access

### Option 1: Allow All IPs (Easiest for Development)

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Select your cluster
3. Click **"Network Access"** in the left sidebar
4. Click **"Add IP Address"**
5. Click **"Allow Access from Anywhere"**
6. Confirm with IP: `0.0.0.0/0`
7. Click **"Confirm"**

⚠️ **Note:** This allows all IPs. Your database is still protected by username/password.

### Option 2: Whitelist Specific IPs (More Secure)

Vercel uses dynamic IPs, so you'll need to whitelist a range. Unfortunately, Vercel doesn't provide a fixed IP list for serverless functions.

**Recommended:** Use Option 1 for Vercel deployments, as the connection is still secured by:
- Username/password authentication
- TLS/SSL encryption
- MongoDB's security features

---

## ✅ Verify Your Connection String

Your connection string should be in your `.env` file and follow this format:
```
mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority&appName=<app-name>
```

**Components:**
- **Username:** Your MongoDB Atlas username
- **Password:** Your MongoDB Atlas password
- **Cluster:** Your cluster address
- **Database:** `monochrome-web-solutions`
- **App Name:** Your app name

---

## 🧪 Test Connection

### From Local Machine

```bash
cd monochrome-web-solutions-backend
npm run dev
```

You should see:
```
✓ MongoDB Connected: project-monochrome.2oqfblc.mongodb.net
✓ Database: monochrome-web-solutions
```

### From Vercel (After Deployment)

Visit: `https://your-project.vercel.app/api/health`

Should return:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-16T..."
}
```

---

## 🔐 Security Best Practices

### ✅ Already Implemented
- [x] Strong password
- [x] Specific database user (not admin)
- [x] Connection string in environment variables
- [x] TLS/SSL encryption enabled

### 🎯 Additional Recommendations
- [ ] Rotate password periodically
- [ ] Use different credentials for dev/prod
- [ ] Enable MongoDB Atlas monitoring
- [ ] Set up backup schedule
- [ ] Review access logs regularly

---

## 📊 MongoDB Atlas Dashboard

### Useful Features

1. **Metrics** - Monitor database performance
2. **Collections** - View your data
3. **Indexes** - Optimize queries
4. **Backups** - Configure automatic backups
5. **Alerts** - Set up notifications

---

## 🐛 Troubleshooting

### "MongoServerError: bad auth"
- Check username and password are correct
- Verify user has read/write permissions on the database

### "MongooseServerSelectionError: connect ETIMEDOUT"
- Check network access settings (allow 0.0.0.0/0)
- Verify cluster is running
- Check connection string format

### "Database not found"
- MongoDB creates databases automatically on first write
- Run `npm run seed` to create and populate database

### "Too many connections"
- Free tier has connection limits
- Use connection pooling (already configured in Mongoose)
- Consider upgrading to paid tier

---

## 📈 Monitoring

### View Database Activity

1. Go to MongoDB Atlas Dashboard
2. Select your cluster
3. Click **"Metrics"** tab
4. Monitor:
   - Connections
   - Operations per second
   - Network traffic
   - Storage usage

### Set Up Alerts

1. Click **"Alerts"** in left sidebar
2. Click **"Add New Alert"**
3. Configure alerts for:
   - High connection count
   - Low storage space
   - Unusual activity

---

## 💾 Backup Strategy

### Automatic Backups (Paid Tier)

MongoDB Atlas offers automatic backups on paid tiers.

### Manual Backup (Free Tier)

Export your data periodically:

```bash
# Using mongodump (requires MongoDB tools)
mongodump --uri="<your-mongodb-connection-string>"
```

---

## 🔄 Database Seeding

### Initial Seed

```bash
npm run seed
```

This creates:
- 10 sample services
- 2 test users (admin + regular)

### Re-seed (Clears existing data)

```bash
npm run seed
```

⚠️ **Warning:** This deletes all existing data!

---

## 📝 Connection String Format

```
mongodb+srv://<username>:<password>@<cluster>/<database>?<options>
```

**Example values:**
- `<username>`: your_mongodb_username
- `<password>`: your_mongodb_password
- `<cluster>`: your-cluster.mongodb.net
- `<database>`: monochrome-web-solutions
- `<options>`: retryWrites=true&w=majority&appName=YourAppName

---

## ✅ Checklist

Before deploying to Vercel:

- [ ] MongoDB Atlas cluster is running
- [ ] Network access allows 0.0.0.0/0
- [ ] Database user has read/write permissions
- [ ] Connection string is correct
- [ ] Database has been seeded
- [ ] Local connection works (`npm run dev`)
- [ ] Environment variables ready for Vercel

---

## 🎉 You're Ready!

Your MongoDB Atlas is configured and ready for Vercel deployment!

**Next Step:** Deploy to Vercel using `QUICK_DEPLOY.md`
