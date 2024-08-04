import React, { useEffect, useState } from "react";
import { getSkills } from "../../apiServices/SkillapiService";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PacmanLoader } from "react-spinners";

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

  const containerVariants = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className="bg-[#22242f] w-full min-h-dvh pt-14 pb-14"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.div
        className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <PacmanLoader color="#c497fe" size={50} />
          </div>
        ) : (
          <>
            {error && (
              <div className="text-red-500 text-center py-4">{error}</div>
            )}

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#c497fe]">
                Skills
              </p>
              <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed py-6">
                These are the technologies I've worked with and used them in my
                projects.
              </p>
            </motion.div>

            <motion.div
              className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
              variants={containerVariants}
            >
              {skills.map(({ id, name, iconid, redirecturl }) => (
                <Link
                  to={redirecturl}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={id}
                >
                  <motion.div
                    className="shadow-md py-2 rounded-lg shadow-[#c497fe] hover:shadow-[#c4f582]"
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={iconid}
                      alt={`${name}`}
                      className="w-20 mx-auto"
                    />
                    <p className="mt-4">{name}</p>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
