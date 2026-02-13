**Smart Bookmark Manager**

A full-stack bookmark management application that enables users to securely save, organize, and manage bookmarks with real-time synchronization across multiple browser tabs.

Built using modern web technologies, this application focuses on performance, scalability, authentication security, and seamless user experience.

**Live Demo**

👉 https://smart-bookmark-ep6j9tonu-shivani-koonas-projects.vercel.app

**GitHub Repository**

👉 https://github.com/ShivaniKoona26/smart-bookmark-app

**Features:**
Secure Authentication
*Google OAuth login using Supabase Auth
*User-specific bookmark storage
*Secure session handling

Bookmark Management
*Add bookmarks with URL and title
*View saved bookmarks instantly
*Delete bookmarks anytime

Real-Time Synchronization
*Instant bookmark updates across multiple browser tabs
*Uses Supabase Realtime subscriptions

Responsive UI
*Mobile-friendly and adaptive layout
*Built using Tailwind CSS utility-first styling

Production Deployment
*Fully deployed using Vercel
*Environment-based configuration

**Tech Stack**
Frontend
*Next.js (App Router)
*React

TypeScript
*Tailwind CSS

Backend / Database
*Supabase (PostgreSQL)
*Supabase Auth
*Supabase Realtime

Deployment
*Vercel

🧩 Architecture Overview
User → Next.js Frontend → Supabase Auth → PostgreSQL Database
                                  ↓
                           Supabase Realtime

⚙️ **Local Setup Instructions**

1️⃣ Clone Repository
git clone https://github.com/ShivaniKoona26/smart-bookmark-app.git
cd smart-bookmark-app

2️⃣ Install Dependencies
npm install

3️⃣ Setup Environment Variables

Create .env.local file in the root directory:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

4️⃣ Run Application
npm run dev

Application will run on:

http://localhost:3000


**How To Use**
1. Login using Google Authentication
2. Add bookmark URL and title
3. View bookmarks instantly
4. Open the application in multiple tabs to experience realtime sync
5. Delete bookmarks whenever required




Challenge  I faced: Managing Authentication State in Next.js App Router
Problem:
Maintaining user session consistently across server and client components.

Solution:
*Leveraged Supabase Auth session helpers.
*Implemented client-side session validation.
*Ensured protected routes only render when authentication is confirmed.

