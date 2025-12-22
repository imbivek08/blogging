# PostPluse

A full-stack blog application built with the MERN stack (MongoDB, Express, React, Node.js) featuring user authentication, post management, and commenting functionality.

## Live Demo

Check out the live demo of the project [here](https://showcase-3vbg.onrender.com).

## 📁 Project Structure

```
postpluse/
├── backend/                    # Backend server
│   └── api/
│       ├── index.js           # Main server entry point
│       ├── controllers/       # Business logic
│       │   ├── auth.controller.js
│       │   ├── comment.controller.js
│       │   ├── post.controller.js
│       │   └── user.controller.js
│       ├── models/            # MongoDB schemas
│       │   ├── comment.model.js
│       │   ├── post.model.js
│       │   └── user.model.js
│       ├── routes/            # API route definitions
│       │   ├── auth.route.js
│       │   ├── comment.route.js
│       │   ├── post.route.js
│       │   └── user.route.js
│       └── utils/             # Helper functions
│           ├── error.js
│           └── verifyUser.js
│
├── client/                     # Frontend React application
│   ├── src/
│   │   ├── App.jsx            # Main app component
│   │   ├── main.jsx           # Entry point
│   │   ├── firebase.js        # Firebase configuration
│   │   ├── components/        # Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── DashSideBar.jsx
│   │   │   ├── DashProfile.jsx
│   │   │   ├── DashPost.jsx
│   │   │   ├── DashUsers.jsx
│   │   │   ├── PostCard.jsx
│   │   │   ├── Comment.jsx
│   │   │   ├── CommentSection.jsx
│   │   │   ├── CallToAction.jsx
│   │   │   ├── PrivateRoute.jsx
│   │   │   ├── OnlyAdminPrivateRoute.jsx
│   │   │   └── ThemeProvider.jsx
│   │   ├── pages/             # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   ├── UpdatePage.jsx
│   │   │   ├── PostPage.jsx
│   │   │   ├── SearchPage.jsx
│   │   │   └── Projects.jsx
│   │   └── redux/             # State management
│   │       ├── store.js
│   │       └── features/
│   │           ├── userSlice.js
│   │           └── themeSlice.js
│   ├── public/                # Static assets
│   ├── index.html
│   ├── vite.config.js         # Vite configuration
│   └── tailwind.config.js     # Tailwind CSS configuration
│
├── docker-compose.yml          # MongoDB container setup
├── .env                        # Environment variables
├── package.json               # Root dependencies and scripts
└── README.md                  # This file
```

## ✨ Features

### Authentication & Authorization
- User registration and login
- JWT-based authentication
- Role-based access control (Admin/User)
- Secure password hashing with bcrypt
- Protected routes for authenticated users
- Admin-only routes for management features

### Blog Management
- Create, read, update, and delete blog posts
- Rich text editor for post content
- Post categorization and tagging
- Search functionality for posts
- Featured/popular posts display
- Post pagination

### User Features
- User profile management
- Dashboard for authenticated users
- Personal post management
- Comment on blog posts
- Dark/Light theme toggle
- Responsive design for all devices

### Admin Features
- User management dashboard
- Post moderation capabilities
- User role management
- Analytics and statistics
- Comment moderation

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Docker and Docker Compose
- npm or yarn

### Prerequisites
- Node.js (v14 or higher)
- Docker and Docker Compose
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/postplus.git
   cd postpluse
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install

   # Install client dependencies
   cd client
   npm install
   cd ..
   ```

3. **Set up environment variables**
   
   The `.env` file in the root directory contains:
   ```env
   # MongoDB Configuration
   DB_URL=mongodb://admin:password123@localhost:27017/postpluse?authSource=admin

   # Server Configuration
   PORT=3000
   NODE_ENV=development

   # JWT Secret (change in production!)
   JWT_SECRET=your-secret-key-here
   ```

   Create a `.env` file in the `client` directory for Firebase:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key_here
   ```

   **Important:** Update `JWT_SECRET` with a secure random string before deploying to production.

4. **Start MongoDB with Docker**
   ```bash
   docker-compose up -d
   ```

   This will start a MongoDB container on port 27017.

5. **Start the development servers**
   
   In the root directory (backend):
   ```bash
   npm run dev
   ```

   In a new terminal (client):
   ```bash
   cd client
   npm run dev
   ```

### Building for Production

```bash
# Build the client
cd client
npm run build

# The build output will be in client/dist/
# Start the backend server which will serve the static files
cd ..
npm start
```

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Firebase** - Authentication integration

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Token-based authentication
- **bcrypt.js** - Password hashing
- **cookie-parser** - Cookie handling

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **nodemon** - Development auto-restart

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/signin` - Login user
- `POST /api/auth/signout` - Logout user

### Users
- `GET /api/user/:userId` - Get user profile
- `PUT /api/user/update/:userId` - Update user profile
- `DELETE /api/user/delete/:userId` - Delete user account
- `GET /api/user/getusers` - Get all users (Admin only)

### Posts
- `GET /api/post/getPosts` - Get all posts (with pagination)
- `GET /api/post/:postId` - Get single post
- `POST /api/post/create` - Create new post (Admin only)
- `PUT /api/post/update/:postId` - Update post (Admin only)
- `DELETE /api/post/delete/:postId` - Delete post (Admin only)

### Comments
- `GET /api/comment/getPostComments/:postId` - Get comments for a post
- `POST /api/comment/create` - Create comment (authenticated users)
- `PUT /api/comment/edit/:commentId` - Edit comment
- `DELETE /api/comment/delete/:commentId` - Delete comment

## 🔒 Security Features

- JWT token-based authentication
- HTTP-only cookies for token storage
- Password hashing with bcrypt
- Protected API routes with middleware
- Role-based access control
- Input validation and sanitization
- Error handling middleware

## 🎨 Theming

The application supports dark and light themes using Redux for state management and Tailwind CSS for styling. Users can toggle between themes, and their preference is persisted.

## 📝 License

This project is licensed under the ISC License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or feedback, please reach out through the contact page in the application.

---

**Note:** Remember to update the JWT_SECRET and database credentials before deploying to production!
