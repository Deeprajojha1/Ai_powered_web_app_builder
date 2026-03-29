# NxtBuild - AI-Powered Web App Builder

A modern web application that uses AI to generate HTML, CSS, and JavaScript code from natural language descriptions. Build beautiful websites instantly by describing your ideas!

## 🚀 Features

- **AI Code Generation**: Convert natural language descriptions into fully functional HTML/CSS/JavaScript
- **Live Preview**: Instant preview of generated code in real-time
- **Code Editor**: Edit and customize generated code with syntax highlighting
- **Project Management**: Save and manage multiple projects
- **User Authentication**: Secure login and registration system
- **Chat Interface**: Interactive chat with AI for iterative development
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Download Code**: Export generated projects as standalone HTML files

## 🛠️ Tech Stack

### Frontend
- **React** 18+ - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with flexbox and responsive design

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Google Gemini API** - AI code generation
- **JWT** - Authentication

### DevOps & Tools
- **Git** - Version control
- **.gitignore** - Git ignore configuration

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or cloud)
- Google Gemini API key
- Modern web browser

## 🔧 Installation

### 1. Clone the Repository
```bash
git clone <repository-url>
cd ai_powered_web_app_builder
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create `.env` file in the `server` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nxtbuild
JWT_SECRET=your_jwt_secret_key_here
GOOGLE_API_KEY=your_google_gemini_api_key_here
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd client
npm install
```

Create `.env` file in the `client` directory:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
ai_powered_web_app_builder/
├── client/                          # React frontend
│   ├── src/
│   │   ├── components/              # React components
│   │   │   ├── ChatInput.jsx
│   │   │   ├── ChatMessage.jsx
│   │   │   ├── CodeEditor.jsx
│   │   │   ├── LivePreview.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/                 # Context API
│   │   │   ├── AuthContext.jsx      # User authentication
│   │   │   └── ToastContext.jsx     # Notifications
│   │   ├── pages/                   # Page components
│   │   │   ├── LandingPage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   └── BuilderPage.jsx
│   │   ├── services/                # API services
│   │   │   ├── api.js              # Axios instance
│   │   │   ├── authService.js
│   │   │   ├── projectService.js
│   │   │   └── generationService.js
│   │   ├── styles/                  # CSS files
│   │   │   ├── index.css
│   │   │   ├── navbar.css
│   │   │   ├── landing.css
│   │   │   ├── login.css
│   │   │   ├── dashboard.css
│   │   │   └── builder.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/                          # Express backend
│   ├── src/
│   │   ├── app.js                   # Express app setup
│   │   ├── config/                  # Configuration
│   │   │   ├── db.config.js        # MongoDB connection
│   │   │   └── gemini.config.js    # Gemini API setup
│   │   ├── constants/
│   │   │   └── prompts.js          # AI prompts
│   │   ├── controllers/             # Request handlers
│   │   │   ├── auth.controller.js
│   │   │   ├── project.controller.js
│   │   │   └── generation.controller.js
│   │   ├── middleware/              # Express middleware
│   │   │   ├── auth.middleware.js
│   │   │   └── error.middleware.js
│   │   ├── models/                  # Mongoose schemas
│   │   │   ├── User.model.js
│   │   │   └── Project.model.js
│   │   ├── routes/                  # API routes
│   │   │   ├── index.js
│   │   │   ├── auth.routes.js
│   │   │   ├── project.routes.js
│   │   │   └── generation.routes.js
│   │   ├── services/                # Business logic
│   │   │   ├── auth.service.js
│   │   │   ├── gemini.service.js
│   │   │   ├── generation.service.js
│   │   │   └── project.service.js
│   │   └── utils/                   # Utilities
│   │       ├── jwt.utils.js
│   │       └── code.utils.js
│   ├── package.json
│   └── server.js
│
├── .gitignore                       # Git ignore rules
└── README.md                        # This file
```

## 🚀 Usage

### For Users

1. **Sign Up**: Create a new account on the landing page
2. **Create Project**: Click "New Project" on the dashboard
3. **Describe**: Tell the AI what you want to build in the chat
4. **Preview**: See the live preview of your generated code
5. **Edit**: Make adjustments using the code editor if needed
6. **Download**: Export your project as HTML file

### Example Prompts

- "Build a personal portfolio website with dark theme"
- "Create a simple calculator app"
- "Make a weather dashboard with cards"
- "Design a landing page for a coffee shop"
- "Build a to-do list application"

## 🔐 Authentication

- JWT-based authentication
- Secure password hashing (bcrypt)
- Protected routes requiring authentication
- Token stored in HTTP-only cookies

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user profile

### Projects
- `GET /api/projects` - Get all user projects
- `GET /api/projects/:id` - Get specific project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Code Generation
- `POST /api/generate/:projectId` - Generate code from prompt

## 🎨 Styling

- **Color Scheme**: Indigo (#6366f1) primary, with supporting grays
- **Typography**: Bree Serif for headings, Roboto for body
- **Responsive**: Mobile-first approach with breakpoints at 480px, 768px, 1024px
- **Theme**: Light and dark backgrounds with clean, modern design

## 🔍 Error Handling

- Global error middleware for consistent error responses
- 404 handler for non-existent routes
- Client-side error messages via toast notifications
- Validation on both frontend and backend

## 📱 Mobile Responsiveness

- **480px**: Mobile devices (phones)
- **768px**: Tablets
- **1024px**: Desktop and large screens
- Touch-friendly buttons and spacing
- Optimized font sizes for readability

## 🌍 Environment Variables

### Server (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/nxtbuild
JWT_SECRET=your_secret_key
GOOGLE_API_KEY=your_gemini_api_key
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Client (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🐛 Troubleshooting

### Server won't start
- Check if MongoDB is running
- Verify environment variables in `.env`
- Check if port 5000 is available

### Frontend not connecting to backend
- Ensure `VITE_API_URL` is correct
- Check if backend server is running
- Verify CORS settings in server

### Code generation not working
- Verify Google Gemini API key is valid
- Check API rate limits
- Review error messages in browser console

### Preview not showing
- Clear browser cache
- Check iframe sandbox permissions
- Verify generated code syntax

## 💡 Tips

- Save projects regularly
- Start with simple prompts before complex ones
- Use the code editor to learn how AI structures HTML
- Download your work frequently to avoid losing progress

## 📞 Support

For issues and questions, please open an issue on GitHub or contact the development team.

---

**Made with ❤️ by NxtBuild Team**

Happy Building! 🚀
