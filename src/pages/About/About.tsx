import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

import { toast, ToastContainer } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Languages,
  Calendar,
  FileText,
  Download,
} from "lucide-react";

const About: React.FC = () => {
  const UserProfile = [
    {
      name: "Tarin Agarwal",
      profession: "Game Developer",
      email: "tarinagarwal@gmail.com",
      state: "Bangalore",
      country: "India",

      expLevel: 4,
      hobbies: ["Reading", "Travelling", "Cooking", "Photography", "Gaming"],
      skills: [
        { name: "Game Dev", progress: 90 },
        { name: "Web Dev", progress: 70 },
        { name: "App Dev", progress: 60 },
        { name: "C/C++", progress: 92 },
        { name: "Python", progress: 80 },
      ],
    },
  ];

  const Resume = () => toast.error("Resume Not Available");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex  w-full pt-20 flex-col min-h-screen justify-center bg-[#0a0b1e] text-white overflow-hidden"
      >
        <div className="fixed inset-0 z-0"></div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            About Me
          </motion.h1>
          {UserProfile.map((user, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-transparent border-gray-700 overflow-hidden shadow-xl">
                <CardHeader className="bg-gradient-to-r from-purple-900 to-indigo-900 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-20 blur-3xl"></div>
                      <img
                        src="https://i.ibb.co/3mn2P2L/Whats-App-Image-2024-07-19-at-19-48-12-a0ae1728.jpg"
                        alt="User"
                        className="h-24 w-24 rounded-full border-4 border-white shadow-lg relative z-10"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        {user.name}
                      </CardTitle>
                      <CardDescription className="text-xl text-cyan-400">
                        {user.profession}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                      Profile
                    </h2>
                    <ul className="space-y-4">
                      {[
                        {
                          icon: <Mail className="text-cyan-400" />,
                          label: "Email",
                          value: user.email,
                        },
                        {
                          icon: <MapPin className="text-cyan-400" />,
                          label: "Location",
                          value: `${user.state}, ${user.country}`,
                        },

                        {
                          icon: <Briefcase className="text-cyan-400" />,
                          label: "Experience",
                          value: `${user.expLevel} Years`,
                        },
                      ].map((item, i) => (
                        <li key={i} className="flex items-center space-x-3">
                          {item.icon}
                          <span className="font-semibold text-purple-300">
                            {item.label}:
                          </span>
                          <span className="text-gray-300">{item.value}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <Separator className="bg-gray-700" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                      Skills
                    </h2>
                    <ul className="space-y-4">
                      {user.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium text-cyan-400">
                              {skill.name}
                            </span>
                            <span className="text-purple-300">
                              {skill.progress}%
                            </span>
                          </div>
                          <Progress
                            value={skill.progress}
                            className="h-2 bg-gray-700"
                          />
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <Separator className="bg-gray-700" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                      Hobbies
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {user.hobbies.map((hobby, hobbyIndex) => (
                        <span
                          key={hobbyIndex}
                          className="px-3 py-1 bg-gray-800 rounded-full text-sm text-cyan-400 border border-purple-600"
                        >
                          {hobby}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                  <Separator className="bg-gray-700" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                      General Information
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Hi, I'm a developer who loves diving into all things tech.
                      Whether it's building web apps with React and Node.js,
                      crafting game worlds in Unity and Unreal Engine, or
                      experimenting with languages like GoLang and Dart, I'm
                      always eager to learn and create. My toolkit includes
                      everything from TypeScript and PostgreSQL to Tailwind CSS
                      and Python, and I enjoy finding the best way to solve
                      problems and bring ideas to life. I am all about pushing
                      my skills further and seeing where my curiosity takes me
                      next.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        {
                          icon: <GraduationCap className="text-cyan-400" />,
                          label: "Education",
                          value: "BMS Institute of Technology and Management",
                        },
                        {
                          icon: <Briefcase className="text-cyan-400" />,
                          label: "Work History",
                          value: "Remedy Games",
                        },
                        {
                          icon: <Languages className="text-cyan-400" />,
                          label: "Languages",
                          value: "English, Hindi, Spanish",
                        },
                        {
                          icon: <User className="text-cyan-400" />,
                          label: "Role",
                          value: "Student",
                        },
                        {
                          icon: <FileText className="text-cyan-400" />,
                          label: "Department",
                          value: "CSE",
                        },
                        {
                          icon: <Calendar className="text-cyan-400" />,
                          label: "Birthday",
                          value: "March 7, 2005",
                        },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start space-x-3">
                          <div className="text-cyan-400">{item.icon}</div>
                          <div>
                            <div className="font-semibold text-purple-300">
                              {item.label}
                            </div>
                            <div className="text-gray-300">{item.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  <Separator className="bg-gray-700" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <h2 className="text-2xl font-semibold mb-4 text-purple-400">
                      Resume
                    </h2>
                    <Button
                      onClick={Resume}
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white transition-all duration-300 flex items-center space-x-2 rounded-full px-6 py-3"
                    >
                      <Download size={18} />
                      <span>Download Resume</span>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <ToastContainer position="bottom-right" theme="dark" />
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
