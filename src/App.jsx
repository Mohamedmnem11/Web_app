import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Nav";
import Home from "./components/Home";
import Episodes from "./pages/Episodes";
import Leaderboard from "./components/Leaderboard";
import Profile from "./components/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SplashScreen from "./pages/SplashScreen";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // عرض شاشة السبلاتش لمدة 3 ثواني
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // لو لسه في السبلاتش
  if (loading && location.pathname === "/splash") {
    return <SplashScreen />;
  }

  // لو المستخدم دخل أي صفحة قبل السبلاتش
  if (loading && location.pathname !== "/splash") {
    return <Navigate to="/splash" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white">
      {/* النجوم في الخلفية */}
      {Array(50)
        .fill()
        .map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${Math.random() * 2 + 1}s infinite alternate`,
            }}
          />
        ))}

      {/* Navbar تظهر بعد السبلاتش */}
      {!loading && <Navbar />}

      {/* المحتوى */}
      <main className="pt-24 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="*" element={<Navigate to="/splash" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
