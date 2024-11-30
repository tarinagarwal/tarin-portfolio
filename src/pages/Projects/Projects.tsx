"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  src: string;
  link?: string;
  repo?: string;
  title: string;
  description: string;
  skills: string[];
}

const projects: Project[] = [
  {
    id: 1,
    src: "https://i.ibb.co/nbbtgrg/image.png",
    link: "https://hirex-gilt.vercel.app/",
    repo: "https://github.com/tarinagarwal/HireX",
    title: "HireX (Web App)",
    description:
      "A job portal application where recruiters can easily post jobs, track hiring status (open or closed), and review applications with a single click. Job seekers can browse job listings, save opportunities for later, and apply quickly with one click.",
    skills: [
      "React",
      "Javascript",
      "Supabase",
      "Clerk Auth",
      "Tailwind CSS",
      "Frontend Development",
      "Backend Development",
    ],
  },
  {
    id: 2,
    src: "https://i.ibb.co/fMz22BS/image.png",
    link: "https://calamitiq.netlify.app/",
    repo: "https://github.com/tarinagarwal/CalamitiQ.git",
    title: "CalamitiQ (Web App)",
    description:
      "A website that revolutionizes disaster preparedness with real-time shelter info, disaster tracking, and alerts. An interactive map shows nearby shelters with live updates, while dashboards keep you informed about ongoing emergencies. Educational resources and an AI chatbot provide essential skills and instant support.",
    skills: [
      "React",
      "NodeJs",
      "ExpressJs",
      "Javascript",
      "Tailwind CSS",
      "Gemini",
      "Frontend Development",
      "Backend Development",
    ],
  },
  {
    id: 3,
    src: "https://i.ibb.co/X5SYpRs/Whats-App-Image-2024-06-19-at-22-42-36-ba764734.jpg",
    link: "https://tarinagarwal.itch.io/paint-the-walls-red",
    title: "Paint The Walls Red (Game)",
    description: "A strategic game created with Unity Engine.",
    skills: ["Unity 3D"],
  },
  {
    id: 4,
    src: "https://i.ibb.co/kJ2hFRf/Whats-App-Image-2024-09-06-at-19-32-00-47692761.jpg",
    repo: "https://github.com/tarinagarwal/ShopScribe.git",
    title: "ShopScribe (Mobile App)",
    description:
      "Keep a track of your all the shopping lists with this amazing application!",
    skills: ["Dart", "Flutter"],
  },
  {
    id: 5,
    src: "https://i.ibb.co/mGrSNLz/Whats-App-Image-2024-09-06-at-19-44-02-3cdd03c8.jpg",
    repo: "https://github.com/tarinagarwal/Tic-Tac-Toe.git",
    title: "Tic Tac Toe (Mobile App)",
    description:
      "A basic Tic Tac Toe game with two modes: 2-player and single-player. In single-player mode, the game features a basic AI opponent.",
    skills: ["Dart", "Flutter"],
  },
  {
    id: 6,
    src: "https://i.ibb.co/yPc4mwL/image.png",
    link: "https://bio-scribe.vercel.app/",
    repo: "https://github.com/tarinagarwal/BioScribe",
    title: "BioScribe (Web App)",
    description:
      "Ever faced problems writing bios for your social media platform? We've got you! Here is our AI-powered bio enhancer. Get your bio crafted without any buzzwords.",
    skills: [
      "Next.js",
      "Groq LLM",
      "Gen AI",
      "Tailwind CSS",
      "Typescript",
      "Frontend Development",
      "Backend Development",
    ],
  },
  {
    id: 7,
    src: "https://i.ibb.co/WWSXRHY/image.png",
    link: "https://medify-web.vercel.app/",
    repo: "https://github.com/tarinagarwal/medify",
    title: "Medify (Web App)",
    description:
      "A patient management system with detailed registration with personal and medical information with identification proof, digital appointment booking with an option to select preferred time and date and a admin dashboard. Patients will be notified about their appointment application status",
    skills: [
      "Next.js",
      "Appwrite",
      "Twilio",
      "Tailwind CSS",
      "Typescript",
      "Frontend Development",
      "Backend Development",
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<"description" | "skills">(
    "description"
  );
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Card className="bg-gray-900 border-gray-700 flex flex-col">
      <CardHeader className="p-0">
        <img
          src={project.src}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="p-4 flex-grow flex flex-col">
        <CardTitle className="text-xl text-purple-400 font-semibold mb-2">
          {project.title}
        </CardTitle>
        <div className="flex space-x-2 mb-4">
          <Button
            variant={"outline"}
            size="sm"
            onClick={() => setActiveTab("description")}
            className={`flex-1 ${
              activeTab === "description"
                ? "bg-purple-400 hover:bg-purple-400"
                : "bg-transparent hover:bg-transparent text-gray-300 hover:text-gray-300 border-gray-700"
            }`}
          >
            <FileText className="mr-2 h-4 w-4" />
            Description
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setActiveTab("skills")}
            className={`flex-1 ${
              activeTab === "skills"
                ? "bg-purple-400 hover:bg-purple-400"
                : "bg-transparent hover:bg-transparent text-gray-300 hover:text-gray-300 border-gray-700"
            }`}
          >
            <Code className="mr-2 h-4 w-4" />
            Tech
          </Button>
        </div>
        <div className="text-gray-300 mb-4 flex-grow">
          <motion.div
            ref={contentRef}
            initial={false}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {activeTab === "description" ? (
              <p>{project.description}</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    className="bg-cyan-400 text-black hover:bg-cyan-500"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4">
        {project.link && (
          <Button
            variant="outline"
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:text-white hover:to-indigo-700 text-white transition-all duration-300 flex items-center space-x-2 rounded-full px-4 py-3"
            onClick={() => window.open(project.link, "_blank")}
          >
            Project
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        )}
        {project.repo && (
          <Button
            variant="outline"
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:text-white hover:to-indigo-700 text-white transition-all duration-300 flex items-center space-x-2 rounded-full px-4 py-3"
            onClick={() => window.open(project.repo, "_blank")}
          >
            GitHub
            <Github className="ml-2 h-4 w-4" />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default function Projects() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex w-full pt-20 flex-col min-h-screen justify-center bg-[#0a0b1e] text-white overflow-hidden"
      >
        <div className="fixed inset-0 z-0"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-xl mb-12 text-gray-300"
          >
            Check out some of my work right here
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-transparent border-gray-700 overflow-hidden shadow-xl">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
