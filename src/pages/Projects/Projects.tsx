import React, { useEffect, useState } from "react";
import { getProjects } from "../../apiServices/projectsApiService";
import { motion, AnimatePresence } from "framer-motion";
import { PacmanLoader } from "react-spinners";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  id?: number;
  src: string;
  link: string;
  repo?: string;
  title: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        // @ts-ignore
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
            Portfolio
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
            <Card className="bg-gray-900 border-gray-700 overflow-hidden shadow-xl">
              <CardContent className="p-6">
                {loading ? (
                  <div className="flex justify-center items-center py-12">
                    <PacmanLoader color="#8b5cf6" size={50} />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map(({ id, src, link, repo, title }) => (
                      <motion.div
                        key={id}
                        className="relative group cursor-pointer rounded-lg overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={src}
                          alt={title}
                          className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-lg font-semibold mb-2 text-white">
                            {title}
                          </h3>
                          <div className="flex space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-white bg-purple-600 hover:bg-purple-700"
                              onClick={() => window.open(link, "_blank")}
                            >
                              Project
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Button>
                            {repo && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="text-white bg-purple-600 hover:bg-purple-700"
                                onClick={() => window.open(repo, "_blank")}
                              >
                                GitHub
                                <Github className="ml-2 h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Projects;
