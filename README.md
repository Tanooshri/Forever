# FOREVER — E-Commerce Platform

A full-stack E-Commerce application with a customer storefront, admin management panel, and Express/MongoDB backend integrating authentication, media storage, and payment gateways.

---

## 📁 Repository Structure

```text
FOREVER/
├── backend/    # Node.js + Express API server (Authentication, Database, Payment integration)
├── frontend/   # React + Vite customer-facing storefront web application

```

---

## ✨ Features

- **Storefront (Frontend)**: Product browsing, cart management, user authentication, responsive UI built with React & TailwindCSS.
- **Backend Services**: RESTful APIs powered by Node.js & Express, MongoDB database integration via Mongoose, image cloud storage with Cloudinary, file uploads using Multer, and payment gateway support (Stripe & Razorpay).

---

## 🛠️ Tech Stack

### **Backend**
- **Runtime & Framework**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JSON Web Tokens (JWT), Bcrypt
- **Cloud & Utilities**: Cloudinary, Multer, Dotenv, Cors, Validator
- **Payments**: Stripe, Razorpay

### **Frontend & Admin**
- **Framework**: React 18, Vite
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **UI Notifications**: React Toastify

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- MongoDB database instance
- Cloudinary credentials (for image hosting)

---

### Installation & Running Locally

#### 1. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in `backend/` with required secrets:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```
Run backend server:
```bash
npm run server
```

#### 2. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

