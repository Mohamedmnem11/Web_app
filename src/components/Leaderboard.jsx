import React from "react";
import image from '../assets/images/WhatsApp Image 2025-10-05 at 2.30.51 AM.jpeg'
const leaderboardData = [
  { id: 1, name: "Stella Nova", score: 8750, icon: "🥇", color: "border-yellow-400" },
  { id: 2, name: "Orion Hunter", score: 7890, icon: "🥈", color: "border-gray-400" },
  { id: 3, name: "Luna Explorer", score: 7200, icon: "🥉", color: "border-orange-500" },
  { id: 4, name: "Cosmic Voyager", score: 6500 },
  { id: 5, name: "Nebula Dreamer", score: 6100 },
  { id: 6, name: "Quasar Quest", score: 5800 },
  { id: 7, name: "Galaxy Guardian", score: 5400 },
];

function LeaderboardCard({ rank, name, score, color, icon }) {
  const isTop3 = rank <= 3;

  return (
    <div
      className={`flex items-center justify-between ${
        isTop3
          ? "bg-gradient-to-r from-[#1a1f3c] to-[#11182e]"
          : "bg-[#11182e]"
      } text-white rounded-xl px-6 py-4 mb-3 border ${
        color || "border-gray-700"
      } ${isTop3 ? "shadow-lg shadow-cyan-400/20 scale-[1.02]" : ""}`}
    >
      {/* Left side */}
      <div className="flex items-center gap-3">
        <span
          className={`text-lg font-bold ${
            isTop3 ? "text-cyan-400" : "text-gray-400"
          }`}
        >
          {icon ? icon : `#${rank}`}
        </span>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-sm font-bold">
            {name[0]}
          </div>
          <span className="font-medium">{name}</span>
        </div>
      </div>

      {/* Right side */}
      <div className="text-cyan-400 font-bold text-lg">
        {score.toLocaleString()}{" "}
        <span className="text-sm text-gray-400">pts</span>
      </div>
    </div>
  );
}

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen  text-white font-sans">
      {/* Title */}
      <div className="text-center m-6 flex flex-col items-center">
        <img src={image} alt="" className="w-24 h-24" />
        <h1 className="text-4xl font-bold mt-2">
          Cosmic <span className="text-cyan-400">Leaderboard</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Top Space Explorers and their scores
        </p>
      </div>

      {/* Leaderboard */}
      <div className="max-w-2xl mx-auto mt-10 px-4">
        {leaderboardData.map((player, index) => (
          <LeaderboardCard
            key={player.id}
            rank={index + 1}
            name={player.name}
            score={player.score}
            color={player.color}
            icon={player.icon}
          />
        ))}
      </div>
    </div>
  );
}
