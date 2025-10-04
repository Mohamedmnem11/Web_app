import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import image1 from '../assets/images/WhatsApp Image 2025-10-05 at 2.30.52 AM.jpeg'
const ProfilePage = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [progress, setProgress] = useState([]);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const savedVideos = JSON.parse(localStorage.getItem("videos")) || [];
    setVideos(savedVideos);
  }, []);

  // لو المستخدم م
  // ش عامل تسجيل دخول
  if (!user) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    // جلب تقدم المستخدم من الباك
    axios
      .get(`/api/progress/${user._id}`)
      .then((res) => setProgress(res.data))
      .catch((err) => console.error(err));
  }, [user]);

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Your Profile
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - User Info */}
            <div className="md:col-span-1">
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-blue-500/30 text-center">
                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
                <p className="text-gray-300 mb-6">{user.role || "Student"}</p>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg transition"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Right Column - Details */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-bold mb-4">Account Information</h3>
                <div className="space-y-3">
                  <div className="flex">
                    <span className="w-32 text-gray-400">Username:</span>
                    <span>{user.name}</span>
                  </div>
                  <div className="flex">
                    <span className="w-32 text-gray-400">Email:</span>
                    <span>{user.email}</span>
                  </div>
                </div>
              </div>

              {/* modal  */}
<div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-purple-500/30">
                <h3 className="text-xl font-bold mb-4">Medals Earned</h3>
                <div className="flex space-x-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-yellow-400">Gold × 2</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-400">Silver × 3</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-700 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-yellow-700">Bronze × 1</p>
                  </div>
                </div>
              </div>

              {/* Progress Cards */}
              <div className="space-y-4  border border-purple-500/30 bg-gray-800 bg-opacity-50 p-6">
                <h3 className="text-xl font-bold">Your Progress</h3>
                {progress.length === 0 && (
                  <p className="text-gray-400">You have no progress yet.</p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {videos.map((v) => (
                    <div
                      key={v.id}
                      className="bg-gray-800 rounded-lg p-4 shadow-lg border border-purple-500"
                    >
                      <img
                        src={v.thumbnail}
                        alt={v.title}
                        className="w-full h-40 object-cover rounded mb-3"
                      />
                      <h2 className="text-xl font-bold mb-1">{v.title}</h2>
                      <p className="text-gray-300 mb-2">{v.description}</p>
                      <div className="bg-gray-700 h-4 rounded-full overflow-hidden mb-1">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-purple-500 h-4 rounded-full"
                          style={{ width: `${((v.score>0?v.score:0) / 40) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Score: {v.score} / 40
                      </p>
                    </div>
                  ))}
                </div>
                 <p className="text-blue-400 mt-3">Keep climbing! Watch more episodes to level up!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
