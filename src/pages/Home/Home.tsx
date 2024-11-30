import React, { useRef, useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import {
  Star,
  Rocket,
  Component,
  Github,
  Linkedin,
  FileText,
  Code,
  ExternalLink,
} from "lucide-react";
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
      "Frontend Development",
      "Backend Development",
      "Supabase",
      "Clerk Auth",
      "Tailwind CSS",
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
      "Frontend Development",
      "Backend Development",
      "Tailwind CSS",
      "Gemini",
    ],
  },
  {
    id: 3,
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

const Home: React.FC = () => {
  const { handleClick } = useOutletContext<{
    handleClick: (path: string) => void;
  }>();
  const navigate = useNavigate();
  const form = useRef<HTMLFormElement>(null);

  const handleViewProjects = () => {
    handleClick("/projects");
    navigate("/projects");
  };

  const sendTelegramMessage = async (message: string) => {
    const url = `https://portfolio-backend-kukl.onrender.com/api/v1/telegram/send`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      console.log("Message sent to Telegram:", data);
      return true;
    } catch (error) {
      console.error("Error sending message to Telegram:", error);
      return false;
    }
  };

  const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const message = `
        Name: ${formData.get("fullname")}
        Email: ${formData.get("usermail")}
        Message: ${formData.get("usermsg")}
      `;

      const success = await sendTelegramMessage(message);

      if (success) {
        form.current.reset();
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        toast.error("Couldn't send the message, please try again!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  useEffect(() => {
    const stars = 200;
    const container = document.querySelector(".star-container");
    for (let i = 0; i < stars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      container?.appendChild(star);
    }
  }, []);

  return (
    <div className="flex pt-10 min-h-screen w-full flex-col bg-[#0a0b1e] text-white overflow-hidden">
      <div className="star-container fixed inset-0 z-0"></div>
      <main className="flex-1 relative z-10">
        <section className="w-full py-12 md:py-24 lg:py-32 border-b border-purple-900">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center"
            >
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Tarin Agarwal
                  </h1>
                  <div className="text-2xl text-cyan-400">
                    <Typewriter
                      options={{
                        strings: [
                          "Web Development",
                          "Game Development",
                          "SQL/PostgreSQL",
                          "Unity Engine",
                          "Unreal Engine",
                          "C/C++",
                          "Python",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    I'm a passionate developer with a focus on building modern,
                    scalable, and user-friendly web applications and games.
                    Let's collaborate and bring your ideas to life!
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    onClick={handleViewProjects}
                    className="inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 active:bg-purple-800 duration-300 hover:scale-105"
                  >
                    <Star className="mr-2 h-4 w-4" /> View Projects
                  </Button>
                  <a href="#contact">
                    <Button className="inline-flex w-full items-center justify-center rounded-full bg-transparent border border-purple-600 px-8 py-3 text-sm font-medium text-purple-600 shadow-lg transition-all hover:bg-purple-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 active:bg-purple-700 duration-300 hover:scale-105">
                      <Component className="mr-2 h-4 w-4" /> Contact Me
                    </Button>
                  </a>
                </div>
                <div className="flex flex-cols gap-4">
                  <Link
                    to="https://github.com/tarinagarwal"
                    aria-label="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300"
                  >
                    <Github className="h-5 w-5" />
                  </Link>

                  <Link
                    to="https://www.linkedin.com/in/tarin-agarwal-810793267/"
                    aria-label="Linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </div>

                <div className="flex space-x-4"></div>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 border-b border-purple-900"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Featured Projects
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my recent projects that showcase my skills
                  and expertise.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="bg-transparent border-gray-700 overflow-hidden shadow-xl mt-8">
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
        </section>

        <section
          id="contact"
          className="w-full min-h-screen py-12 md:py-24 lg:py-32"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Get in Touch
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or just want to say hello? Fill out the
                  form below, and I'll get back to you as soon as possible.
                </p>
              </div>
              <form
                className="mx-auto w-full max-w-md space-y-4"
                ref={form}
                onSubmit={sendForm}
              >
                <Input
                  name="fullname"
                  type="text"
                  placeholder="Name"
                  className="w-full bg-gray-800 border-purple-600 text-white placeholder-gray-400"
                  required
                />
                <Input
                  name="usermail"
                  type="email"
                  placeholder="Email"
                  className="w-full bg-gray-800 border-purple-600 text-white placeholder-gray-400"
                  required
                />
                <Textarea
                  name="usermsg"
                  placeholder="Message"
                  className="w-full bg-gray-800 border-purple-600 text-white placeholder-gray-400"
                  rows={5}
                  required
                />
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 z-100 hover:scale-105"
                  >
                    <Rocket className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                  <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                  />
                </div>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
