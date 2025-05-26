# 🏋️‍♂️ Fitness Dashboard

A modern, responsive, and professional Fitness Dashboard built with **React**, **Vite**, and **Tailwind CSS**. It provides a clean UI and interactive components designed to monitor user fitness metrics like workouts, goals, activity logs, and personal profile details. Perfectly structured for scalability and real-world use cases.

---

## 🔧 Tech Stack

- **React** – Component-based UI library
- **Vite** – Lightning-fast build tool
- **Tailwind CSS** – Utility-first CSS framework
- **Chart.js + react-chartjs-2** – Interactive chart visualizations
- **React Router v6** – Routing and navigation
- **Context API** – For shared state (e.g., dark mode toggle)
- **Dark Mode Support** – Automatically detects system preference or toggles manually

---

## 📁 Project Structure

src/
├── assets/ # Images and icons
├── components/
│ ├── Layout/ # Navbar, Sidebar
│ ├── Dashboard/ # Summary cards, charts, logs, goals
│ ├── Profile/ # User profile page
│ └── common/ # Reusable UI components like Card, Button
├── pages/ # Route-based page components
├── App.jsx # Root component with routing setup
├── main.jsx # App entry point
└── index.css # Tailwind and global styles


---

## ✨ Features

- 📊 **Activity Charts** – View workouts and calories burned over time  
- 📝 **Workout Logs & Goals** – Track progress and objectives  
- 🧑‍💼 **User Profile** – Edit and view personal fitness data  
- 🌙 **Dark Mode** – Toggle or follow system settings  
- 📱 **Responsive Design** – Fully mobile-friendly layout  
- ⚡️ **Fast Performance** – Powered by Vite and optimized rendering

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/fitness-dashboard.git
cd fitness-dashboard
npm install
npm run dev
Notes:
Ensure the following packages are installed:
npm install chart.js react-chartjs-2 chartjs-adapter-date-fns
