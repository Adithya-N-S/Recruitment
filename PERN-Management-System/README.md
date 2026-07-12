# Freshers Event Management System

This is a full-stack PERN (PostgreSQL, Express, React, Node.js) web application designed to manage and organize Freshers' Day events.

## Project Structure

Below is the directory structure generated for this project:

```
freshers-event-management/
├── backend/                  # Node.js + Express.js backend server
│   ├── config/               # Database connection configuration
│   ├── controllers/          # Route handler functions (business logic)
│   ├── middleware/           # Express middlewares (auth, error handler, etc.)
│   ├── models/               # Database tables and SQL queries
│   ├── routes/               # API endpoint routing definitions
│   ├── .env.example          # Sample environment variables file
│   ├── package.json          # Backend dependencies and scripts
│   └── server.js             # Server entry point
│
└── frontend/                 # Vite + React + Tailwind CSS client
    ├── public/               # Public static assets
    ├── src/                  # React application source code
    │   ├── assets/           # Images, logos, and global styles
    │   ├── components/       # Reusable React components (Navbar, Button, Card)
    │   ├── context/          # React Contexts (AuthContext for user state)
    │   ├── pages/            # View pages (Login, Dashboard, EventDetails)
    │   ├── services/         # API integration services (Axios config)
    │   ├── App.jsx           # Main React component & routes
    │   ├── index.css         # Styling entry point (Tailwind directives)
    │   └── main.jsx          # React DOM render entry point
    ├── index.html            # Core HTML template
    ├── package.json          # Frontend dependencies and scripts
    ├── tailwind.config.js    # Tailwind CSS configuration
    └── vite.config.js        # Vite build tool configuration
```
