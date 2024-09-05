import React, { useRef, useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Card, CardContent } from "@/components/ui/card";
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
  Earth,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";

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
    const url = `http://127.0.0.1:5050/api/v1/telegram/send`;

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
                          "SQL/PostgreSQL",
                          "Unity Engine",
                          "Unreal Engine",
                          "Blender",
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
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full bg-transparent border border-purple-600 px-8 py-3 text-sm font-medium text-purple-600 shadow-lg transition-all hover:bg-purple-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 active:bg-purple-700 duration-300 hover:scale-105"
                  >
                    <Component className="mr-2 h-4 w-4" /> Contact Me
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
                    to="https://www.instagram.com/tarinagarwal/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300"
                  >
                    <Instagram className="h-5 w-5" />
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
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Paint The Walls Red",
                  description: "A strategic game created with Unity Engine.",
                  image:
                    "https://i.ibb.co/X5SYpRs/Whats-App-Image-2024-06-19-at-22-42-36-ba764734.jpg",
                  link: "https://tarinagarwal.itch.io/paint-the-walls-red",
                },
                {
                  title: "The Pursuit Within",
                  description:
                    "A horror game made with Unity Engine. The Shaitaan awaits your presence!",
                  image:
                    "https://img.itch.zone/aW1hZ2UvMjE4Mzg4NS8xMjk0MDcwMi5wbmc=/347x500/rwaLy8.png",
                  link: "https://itch.io/profile/samay-entertainment",
                },
                {
                  title: "De-Bug",
                  description: "A fun strategic game made with Unreal Engine.",
                  image:
                    "https://img.itch.zone/aW1nLzE0NDQxNTEyLnBuZw==/original/QK83r3.png",
                  link: "https://samay-entertainment.itch.io/de-bug",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-gray-900 border-purple-600 overflow-hidden group">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="space-y-2 p-4">
                      <h3 className="text-lg font-bold text-purple-400">
                        {project.title}
                      </h3>
                      <p className="text-gray-300">{project.description}</p>
                      <Link
                        to={project.link}
                        target="_blank"
                        className="inline-flex items-center justify-center rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 active:bg-purple-800 duration-300 hover:scale-105"
                      >
                        <Earth className="mr-2 h-4 w-4" /> View Project
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
