import React, { useEffect, useState } from "react";

// لو عايز، ممكن تضيف default users
const defaultLeaderboard = [
  { id: 1, name: "You", score: 0 },
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
        {score} <span className="text-sm text-gray-400">pts</span>
      </div>
    </div>
  );
}

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // جلب الفيديوهات من localStorage وجمع السكور لكل المستخدم
    const videos = JSON.parse(localStorage.getItem("videos")) || [];
    const totalScore = videos.reduce((acc, v) => acc + (v.score || 0), 0);

    const userData = [
      { id: 1, name: "You", score: totalScore }
    ];

    // ترتيب من الأعلى للأقل
    userData.sort((a, b) => b.score - a.score);

    setLeaderboard(userData);
  }, []);

  return (
    <div className="min-h-screen text-white font-sans bg-gray-900 p-6">
      {/* Title */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">
          Cosmic <span className="text-cyan-400">Leaderboard</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Track your progress and scores
        </p>
      </div>

      {/* Leaderboard */}
      <div className="max-w-2xl mx-auto mt-10 px-4">
        {leaderboard.map((player, index) => (
          <LeaderboardCard
            key={player.id}
            rank={index + 1}
            name={player.name}
            score={player.score}
          />
        ))}
      </div>
    </div>
  );
}
