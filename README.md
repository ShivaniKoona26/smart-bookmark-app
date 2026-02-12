⭐ Smart Bookmark Manager

A full-stack bookmark management application that allows users to securely save, view, and manage bookmarks with real-time synchronization across multiple browser tabs.

🚀 Live Demo

👉 https://smart-bookmark-ep6j9tonu-shivani-koonas-projects.vercel.app

📂 GitHub Repository

👉 https://github.com/ShivaniKoona26/smart-bookmark-app

✨ Features

🔐 Google OAuth Authentication (Supabase Auth)

📌 Add, view, and delete bookmarks

⚡ Real-time sync across browser tabs

🧑‍💻 User-specific bookmark storage

📱 Responsive UI

☁️ Fully deployed on Vercel

🛠️ Tech Stack
Frontend

Next.js (App Router)

React

TypeScript

Tailwind CSS

Backend / Database

Supabase (PostgreSQL)

Supabase Realtime

Supabase Auth

Deployment

Vercel
🧩 Architecture Overview
User → Next.js Frontend → Supabase Auth → PostgreSQL Database
                                  ↓
                           Supabase Realtime
⚙️ Local Setup Instructions
1️⃣ Clone Repository
git clone https://github.com/ShivaniKoona26/smart-bookmark-app.git
cd smart-bookmark-app
2️⃣ Install Dependencies
npm install
3️⃣ Setup Environment Variables
Create .env.local

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
4️⃣ Run Application
npm run dev
🧪 How To Use
Login using Google

Add bookmark URL + title

View bookmarks instantly

Open app in multiple tabs to see realtime updates

Delete bookmarks anytime
