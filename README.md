# CRM Automation API 🚀

A professional CRM backend API built with Node.js, Express.js, MongoDB, and Telegram Bot API.

## Features

✅ Lead Management System  
✅ Create, Read, Update, Delete Leads  
✅ Search Leads by Name or Email  
✅ Filter Leads by Status  
✅ Pagination Support  
✅ Sorting Support  
✅ Lead Analytics API  
✅ Recent Leads API  
✅ Notes System for Leads  
✅ Telegram Notification Automation  

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- Telegram Bot API
- Postman

---

# Installation

## Clone Repository

```bash
git clone https://github.com/AbuBakkarSabitth/crm-automation-api.git
```

## Install Dependencies

```bash
npm install
```

## Create .env File

```env
MONGO_URI=your_mongodb_connection
PORT=5000
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

## Run Server

```bash
npm run dev
```

---

# API Endpoints

## Create Lead

```http
POST /api/leads
```

## Get All Leads

```http
GET /api/leads
```

## Update Lead

```http
PUT /api/leads/:id
```

## Delete Lead

```http
DELETE /api/leads/:id
```

## Search Leads

```http
GET /api/leads?search=john
```

## Filter Leads

```http
GET /api/leads?status=new
```

## Pagination

```http
GET /api/leads?page=1&limit=5
```

## Sorting

```http
GET /api/leads?sort=latest
```

## Lead Statistics

```http
GET /api/leads/stats
```

## Recent Leads

```http
GET /api/leads/recent
```

## Add Notes

```http
POST /api/leads/:id/notes
```

---

# Telegram Automation

Whenever a new lead is created, the system automatically sends a Telegram notification.

---

# Author

## Sabith
AI Engineering & Backend Development