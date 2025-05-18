/*
  # Seed projects data
  
  This migration adds initial project data to the projects table
*/

INSERT INTO projects (title, description, image_url, live_url, repo_url, skills)
VALUES
  (
    'HireX (Web App)',
    'A job portal application where recruiters can easily post jobs, track hiring status (open or closed), and review applications with a single click. Job seekers can browse job listings, save opportunities for later, and apply quickly with one click.',
    'https://i.ibb.co/nbbtgrg/image.png',
    'https://hirex-gilt.vercel.app/',
    'https://github.com/tarinagarwal/HireX',
    ARRAY['React', 'Javascript', 'Supabase', 'Clerk Auth', 'Tailwind CSS', 'Frontend Development', 'Backend Development']
  ),
  (
    'CalamitiQ (Web App)',
    'A website that revolutionizes disaster preparedness with real-time shelter info, disaster tracking, and alerts. An interactive map shows nearby shelters with live updates, while dashboards keep you informed about ongoing emergencies. Educational resources and an AI chatbot provide essential skills and instant support.',
    'https://i.ibb.co/fMz22BS/image.png',
    'https://calamitiq.netlify.app/',
    'https://github.com/tarinagarwal/CalamitiQ.git',
    ARRAY['React', 'NodeJs', 'ExpressJs', 'Javascript', 'Tailwind CSS', 'Gemini', 'Frontend Development', 'Backend Development']
  ),
  (
    'Paint The Walls Red (Game)',
    'A strategic game created with Unity Engine.',
    'https://i.ibb.co/X5SYpRs/Whats-App-Image-2024-06-19-at-22-42-36-ba764734.jpg',
    'https://tarinagarwal.itch.io/paint-the-walls-red',
    null,
    ARRAY['Unity 3D']
  ),
  (
    'ShopScribe (Mobile App)',
    'Keep a track of your all the shopping lists with this amazing application!',
    'https://i.ibb.co/kJ2hFRf/Whats-App-Image-2024-09-06-at-19-32-00-47692761.jpg',
    null,
    'https://github.com/tarinagarwal/ShopScribe.git',
    ARRAY['Dart', 'Flutter']
  ),
  (
    'Tic Tac Toe (Mobile App)',
    'A basic Tic Tac Toe game with two modes: 2-player and single-player. In single-player mode, the game features a basic AI opponent.',
    'https://i.ibb.co/mGrSNLz/Whats-App-Image-2024-09-06-at-19-44-02-3cdd03c8.jpg',
    null,
    'https://github.com/tarinagarwal/Tic-Tac-Toe.git',
    ARRAY['Dart', 'Flutter']
  ),
  (
    'BioScribe (Web App)',
    'Ever faced problems writing bios for your social media platform? We''ve got you! Here is our AI-powered bio enhancer. Get your bio crafted without any buzzwords.',
    'https://i.ibb.co/yPc4mwL/image.png',
    'https://bio-scribe.vercel.app/',
    'https://github.com/tarinagarwal/BioScribe',
    ARRAY['Next.js', 'Groq LLM', 'Gen AI', 'Tailwind CSS', 'Typescript', 'Frontend Development', 'Backend Development']
  ),
  (
    'Medify (Web App)',
    'A patient management system with detailed registration with personal and medical information with identification proof, digital appointment booking with an option to select preferred time and date and a admin dashboard. Patients will be notified about their appointment application status',
    'https://i.ibb.co/WWSXRHY/image.png',
    'https://medify-web.vercel.app/',
    'https://github.com/tarinagarwal/medify',
    ARRAY['Next.js', 'Appwrite', 'Twilio', 'Tailwind CSS', 'Typescript', 'Frontend Development', 'Backend Development']
  );