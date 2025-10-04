import React, { useEffect } from "react";
import {motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/WhatsApp Image 2025-10-05 at 2.30.48 AM.jpeg'
export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    // بعد 4 ثواني يروح للهوم
    const timer = setTimeout(() => {
      navigate("/"); // يروح لصفحة الهوم
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0c1120] text-white overflow-hidden">
      {/* Logo Animation */}
      <motion.img
        src={logo} // غيّرها لاسم الصورة بتاعتك فى public
        alt="App Logo"
        className="w-40 h-40 mb-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />

      {/* Text Animation */}
      <motion.h1
        className="text-4xl font-bold text-cyan-400"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Welcome to Weather App
      </motion.h1>

      {/* Shine Line Effect */}
      <motion.div
        className="w-32 h-[2px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mt-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />
    </div>
  );
}
