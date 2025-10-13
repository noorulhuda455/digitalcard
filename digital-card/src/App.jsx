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

      {/* Icons with Tooltips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="flex flex-wrap justify-center gap-8 mt-10"
      >
        {/* LinkedIn */}
        <div className="group relative flex flex-col items-center">
          <a
            href="https://www.linkedin.com/in/noorulhuda92"
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-glow hover:text-pink-400 text-3xl transition-all duration-300 transform hover:-translate-y-1 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
          >
            <FaLinkedin />
          </a>
          <span className="absolute bottom-[-1.8rem] opacity-0 group-hover:opacity-100 text-xs bg-gray-800 text-white px-2 py-1 rounded-md transition-opacity duration-300">
            LinkedIn
          </span>
        </div>

        {/* GitHub */}
        <div className="group relative flex flex-col items-center">
          <a
            href="https://github.com/noorulhuda455"
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-glow hover:text-pink-400 text-3xl transition-all duration-300 transform hover:-translate-y-1 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
          >
            <FaGithub />
          </a>
          <span className="absolute bottom-[-1.8rem] opacity-0 group-hover:opacity-100 text-xs bg-gray-800 text-white px-2 py-1 rounded-md transition-opacity duration-300">
            GitHub
          </span>
        </div>

        {/* Email */}
        <div className="group relative flex flex-col items-center">
          <a
            href="mailto:5281noor@gmail.com"
            className="pulse-glow hover:text-pink-400 text-3xl transition-all duration-300 transform hover:-translate-y-1 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
          >
            <FaEnvelope />
          </a>
          <span className="absolute bottom-[-1.8rem] opacity-0 group-hover:opacity-100 text-xs bg-gray-800 text-white px-2 py-1 rounded-md transition-opacity duration-300">
            Email
          </span>
        </div>

        {/* Resume */}
        <div className="group relative flex flex-col items-center">
          <a
            href="https://drive.google.com/file/d/1A5h0L0XBFuHfHOmu3xnJfEmDWd1SCFK4/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-glow hover:text-pink-400 text-3xl transition-all duration-300 transform hover:-translate-y-1 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
          >
            <FaFileAlt />
          </a>
          <span className="absolute bottom-[-1.8rem] opacity-0 group-hover:opacity-100 text-xs bg-gray-800 text-white px-2 py-1 rounded-md transition-opacity duration-300">
            Resume
          </span>
        </div>

        {/* Portfolio */}
        <div className="group relative flex flex-col items-center">
          <a
            href="https://www.canva.com/design/DAGc-3xsUEA/S0BUrgQm1WkmWkT2YVHLNQ/view?utm_content=DAGc-3xsUEA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h240acdd2ea"
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-glow hover:text-pink-400 text-3xl transition-all duration-300 transform hover:-translate-y-1 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
          >
            <FaGlobe />
          </a>
          <span className="absolute bottom-[-1.8rem] opacity-0 group-hover:opacity-100 text-xs bg-gray-800 text-white px-2 py-1 rounded-md transition-opacity duration-300">
            Portfolio
          </span>
        </div>
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
