import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 py-12 text-gray-300 border-t border-purple-800">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-sm"
          >
            <p>
              &copy; {currentYear}{" "}
              <span className="text-purple-400">Tarin Agarwal</span>. All rights
              reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
