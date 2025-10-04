import React from "react";
import { Trophy } from "lucide-react";
import image1 from '../assets/images/WhatsApp Image 2025-10-05 at 2.30.52 AM.jpeg'
import image2 from '../assets/images/WhatsApp Image 2025-10-05 at 2.30.50 AM.jpeg'
import image3 from '../assets/images/WhatsApp Image 2025-10-05 at 2.30.49 AM (1).jpeg'
function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="font-bold text-5xl mb-4">
          Welcome to <span className="text-primary">Outer Space</span>
        </h1>
        <p className="text-gray-300 max-w-2xl mb-6">
          Embark on an educational journey through the cosmos, learn about
          space weather, complete interactive quizzes, and compete with fellow
          space enthusiasts.
        </p>
        <button className="px-6 py-3 bg-primary text-black font-semibold rounded-xl flex items-center gap-2 hover:scale-105 transition shadow-lg shadow-primary/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Start Exploring
        </button>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        {/* Watch Episodes */}
        <div className="bg-dark bg-opacity-50 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:shadow-primary/40 transition transform hover:-translate-y-1">
          <div className="mb-4">
            <div className="w-12 h-12 bg-primary text-black rounded-full flex items-center justify-center mb-3">
              ▶
            </div>
            <h2 className="text-2xl font-bold text-primary">Watch Episodes</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Explore our collection of space episodes and expand your knowledge.
          </p>
          <button className="border-2 border-primary text-primary w-full py-2 rounded-xl hover:bg-primary hover:text-black transition">
            Explore
          </button>
        </div>

        {/* Take Quizzes */}
        <div className="bg-dark bg-opacity-50 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:shadow-secondary/40 transition transform hover:-translate-y-1">
          <div className="mb-4">
            <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center mb-3">
              ❓
            </div>
            <h2 className="text-2xl font-bold text-secondary">Take Quizzes</h2>
          </div>
          <p className="text-gray-300 mb-4">
            Test your knowledge with our space-themed quizzes.
          </p>
          <button className="border-2 border-secondary text-secondary w-full py-2 rounded-xl hover:bg-secondary hover:text-white transition">
            Explore
          </button>
        </div>

        {/* Leaderboard */}
        <div className="bg-dark bg-opacity-50 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg hover:shadow-yellow-400/40 transition transform hover:-translate-y-1">
          <div className="mb-4">
            <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mb-3">
              <Trophy />
            </div>
            <h2 className="text-2xl font-bold text-yellow-400">
              View Leaderboard
            </h2>
          </div>
          <p className="text-gray-300 mb-4">
            See where you rank among other space enthusiasts.
          </p>
          <button className="border-2 border-yellow-400 text-yellow-400 w-full py-2 rounded-xl hover:bg-yellow-400 hover:text-black transition">
            Explore
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16 text-center">
        <div className="flex flex-col items-center justify-center shadow-lg shadow-primary/40 p-6 rounded-xl bg-dark">
          <h2 className="text-3xl font-bold text-primary">4+</h2>
          <p className="text-gray-300">Episodes Available</p>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg shadow-secondary/40 p-6 rounded-xl bg-dark">
          <h2 className="text-3xl font-bold text-secondary">20+</h2>
          <p className="text-gray-300">Quiz Questions</p>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg shadow-yellow-400/40 p-6 rounded-xl bg-dark">
          <h2 className="text-3xl font-bold text-yellow-400">&</h2>
          <p className="text-gray-300">Knowledge to Explore</p>
        </div>
      </div>

      {/* Points Levels */}
      <div className="bg-dark bg-opacity-50 backdrop-blur-sm rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Points Levels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Beginner */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl p-6 text-center shadow-lg shadow-blue-500/40">
            <div className="flex justify-center mb-3">

              <img src={image1} alt="" className="w-24" />


            </div>
            

            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Beginner</h3>
            <p className="text-blue-200">1 Point</p>
          </div>

          {/* Explorer */}
          <div className="bg-gradient-to-br from-purple-900 to-purple-700 rounded-xl p-6 text-center shadow-lg shadow-purple-500/40">
             <div className="flex justify-center mb-3">

              <img src={image2} alt="" className="w-24" />


            </div>
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">10</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Explorer</h3>
            <p className="text-purple-200">10 Points</p>
          </div>

          {/* Expert */}
          <div className="bg-gradient-to-br from-yellow-900 to-yellow-700 rounded-xl p-6 text-center shadow-lg shadow-yellow-400/40">
            
             <div className="flex justify-center mb-3">

              <img src={image3} alt="" className="w-24" />


            </div>
            <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">100</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Expert</h3>
            <p className="text-yellow-200">100 Points</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
