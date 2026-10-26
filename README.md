# feedback-management

A MERN stack feedback management admin panel that allows administrators to add, view, update, and delete course feedback, with a responsive UI and MongoDB Atlas integration.

## Project Overview

This application is built with:
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB Atlas
- State management: React Router + local component state

## Local Run URLs

Frontend:
- http://localhost:5173

Backend health check:
- http://localhost:5000/api/health

## Local Setup

1. Open the project in VS Code.
2. Create the backend environment file:
   ```bash
   cd backend
   cp .env.example .env
   ```
3. Add your MongoDB connection string and local client URL in `backend/.env`.
4. Install backend dependencies:
   ```bash
   npm install
   ```
5. Start the backend:
   ```bash
   npm run dev
   ```
6. Create the frontend environment file:
   ```bash
   cd ../frontend
   cp .env.example .env
   ```
7. Add the API URL in `frontend/.env`:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
8. Install frontend dependencies:
   ```bash
   npm install
   ```
9. Start the frontend:
   ```bash
   npm run dev
   ```
10. Open the frontend URL in the browser:
   http://localhost:5173

## Notes

- The backend health endpoint responds with a successful status when the application is running correctly.
- The local environment files (`.env`) are intentionally kept out of Git and should not be committed.
- MongoDB credentials must be kept in the local machine environment only.

## Final GitHub Submission

Repository:
- https://github.com/Eliz2132/feedback-management
