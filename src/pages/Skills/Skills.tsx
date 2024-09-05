import React, { useEffect, useState } from "react";
import { getSkills } from "../../apiServices/SkillapiService";
import { motion, AnimatePresence } from "framer-motion";
import { PacmanLoader } from "react-spinners";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Skill {
  id?: number;
  name: string;
  iconid: string;
  redirecturl: string;
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();
        setSkills(data);
      } catch (error) {
        setError("Error fetching skills. Please try again later.");
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
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
            Skills
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-xl mb-12 text-gray-300"
          >
            These are the technologies I've worked with and used in my projects.
          </motion.p>
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 text-center py-4 mb-8"
            >
              {error}
            </motion.div>
          )}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-transparent border-gray-700 overflow-hidden shadow-xl">
              <CardContent className="p-6">
                {loading ? (
                  <div className="flex justify-center items-center py-12">
                    <PacmanLoader color="#8b5cf6" size={50} />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map(({ id, name, iconid, redirecturl }) => (
                      <motion.div
                        key={id}
                        whileHover={{ scale: 1.05 }}
                        className="flex flex-col items-center p-4 bg-gray-900 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                      >
                        <img
                          src={iconid}
                          alt={name}
                          className="w-16 h-16 mb-4 object-contain"
                        />
                        <h3 className="text-lg font-semibold mb-2 text-cyan-400">
                          {name}
                        </h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-2 text-purple-400 hover:text-purple-300 hover:bg-purple-900/50"
                          onClick={() => window.open(redirecturl, "_blank")}
                        >
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
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

export default Skills;
