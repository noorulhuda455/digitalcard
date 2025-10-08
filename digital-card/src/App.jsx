import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt, FaGlobe } from 'react-icons/fa';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-purple-950 text-white px-6">
      {/* Name + Titles */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold tracking-wide mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Noor Ul Huda
        </h1>
        <p className="text-lg italic text-gray-300">
          Bridging Technology and Human Experience
        </p>
        <p className="text-sm text-gray-400 mt-1">
          Senior Computer Science Student @ Pace University
        </p>
      </motion.div>

      {/* Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex gap-6 mt-8"
      >
        {/* Add your links below */}
        <a
          href="https://www.linkedin.com/in/noorulhuda92"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-all text-3xl drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/noorulhuda"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-all text-3xl drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]"
        >
          <FaGithub />
        </a>

        <a
          href="mailto:noor.huda2@pace.edu"
          className="hover:text-pink-400 transition-all text-3xl drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://drive.google.com/your-resume-link"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-all text-3xl drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]"
        >
          <FaFileAlt />
        </a>

        <a
          href="https://www.canva.com/design/DAGc-3xsUEA/S0BUrgQm1WkmWkT2YVHLNQ/view?utm_content=DAGc-3xsUEA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h240acdd2ea"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400 transition-all text-3xl drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]"
        >
          <FaGlobe />
        </a>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10 text-xs text-gray-500"
      >
        © 2025 Noor Ul Huda | Designed with ♡ and code
      </motion.p>
    </div>
  );
}
