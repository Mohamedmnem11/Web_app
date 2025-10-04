import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function EpisodesPage() {
  // فيديوهات البداية
  const initialVideos = [
    {
      id: 0,
      title: "Auroras Explained",
      description: "Learn what causes the Northern and Southern Lights.",
      thumbnail: "https://images.unsplash.com/photo-1517816428104-1c9b1d6a0a3e?auto=format&fit=crop&w=800&q=80",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      unlocked: true,
      score: 0
    },
    {
      id: 1,
      title: "Mars - The Red Planet",
      description: "Discover interesting facts about Mars.",
      thumbnail: "https://images.unsplash.com/photo-1605808591010-8688db327e2f?auto=format&fit=crop&w=800&q=80",
      url: "https://www.w3schools.com/html/movie.mp4",
      unlocked: false,
      score: 0
    },
    {
      id: 2,
      title: "Earth Atmosphere",
      description: "Explore the main gases of Earth's atmosphere.",
      thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      unlocked: false,
      score: 0
    },
    {
      id: 3,
      title: "Ozone Layer Protection",
      description: "Learn how the ozone layer protects life on Earth.",
      thumbnail: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
      url: "https://www.w3schools.com/html/movie.mp4",
      unlocked: false,
      score: 0
    }
  ];

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizState, setQuizState] = useState({ score: 0, currentQuestion: 0 });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("videos")) || initialVideos;
    setVideos(saved);
  }, []);

  // فتح الفيديو التالي بعد النجاح
  const unlockNextVideo = (id) => {
    const updated = videos.map(v => {
      if (v.id === id + 1) v.unlocked = true;
      return v;
    });
    setVideos(updated);
    localStorage.setItem("videos", JSON.stringify(updated));
  };

  // أسئلة الكويز
  const questions = [
    {
      question: "What causes auroras (Northern and Southern Lights)?",
      options: [
        "Reflection of city lights",
        "Charged particles from the Sun interacting with Earth's magnetic field",
        "Light from distant stars",
        "Chemical reactions in the atmosphere"
      ],
      correctAnswer: "Charged particles from the Sun interacting with Earth's magnetic field"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the main gas in Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: "Nitrogen"
    },
    {
      question: "Which layer protects us from harmful UV rays?",
      options: ["Troposphere", "Stratosphere", "Ozone Layer", "Ionosphere"],
      correctAnswer: "Ozone Layer"
    }
  ];

  const totalQuestions = questions.length;

  // المستخدم يجيب على سؤال
  const handleAnswer = (selectedOption) => {
    let newScore = quizState.score;
    if (selectedOption === questions[quizState.currentQuestion].correctAnswer) {
      newScore += 10;
    }

    if (quizState.currentQuestion + 1 < totalQuestions) {
      setQuizState({ score: newScore, currentQuestion: quizState.currentQuestion + 1 });
    } else {
      // حفظ السكور لكل فيديو في localStorage
      const updatedVideos = videos.map(v => {
        if (v.id === selectedVideo.id) v.score = newScore;
        return v;
      });
      setVideos(updatedVideos);
      localStorage.setItem("videos", JSON.stringify(updatedVideos));

      if (newScore >= 40) {
        toast.success("Congratulations! You passed the quiz 🎉");
        unlockNextVideo(selectedVideo.id);
      } else {
        toast.error("Sorry, you didn't pass. Try again ❌");
      }

      setSelectedVideo(null);
      setShowQuiz(false);
      setQuizState({ score: 0, currentQuestion: 0 });
    }
  };

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <Toaster position="top-right" />

      {/* شبكة الفيديوهات */}
      {!selectedVideo && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map(v => (
            <div key={v.id} className="border rounded shadow-lg overflow-hidden bg-gray-800">
              <img
                src={v.thumbnail}
                alt={v.title}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => v.unlocked && setSelectedVideo(v)}
              />
              <div className="p-4 text-center">
                <h2 className="font-bold mb-2 text-white">{v.title}</h2>
                <p className="text-gray-300 mb-3">{v.description}</p>
                {v.unlocked ? (
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    onClick={() => setSelectedVideo(v)}
                  >
                    Play Video
                  </button>
                ) : (
                  <button
                    className="bg-gray-400 text-white px-4 py-2 rounded cursor-not-allowed"
                    disabled
                  >
                    Locked
                  </button>
                )}
                <p className="text-sm mt-2 text-cyan-400">Score: {v.score}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* تشغيل الفيديو */}
      {selectedVideo && !showQuiz && (
        <div className="flex flex-col items-center">
          <video
            src={selectedVideo.url}
            controls
            autoPlay
            className="w-full max-w-2xl rounded"
            onEnded={() => setShowQuiz(true)}
          />
          <p className="mt-2 text-gray-300">Video finished. Click the quiz below!</p>
        </div>
      )}

      {/* Quiz */}
      {selectedVideo && showQuiz && (
        <div className="max-w-2xl mx-auto p-6 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg border border-purple-500 mt-6">
          <div className="text-center mb-4">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
              {selectedVideo.title} Quiz
            </h1>
            <p className="text-cyan-300">Test your knowledge and earn points!</p>
          </div>

          <div className="flex justify-between items-center mb-4 text-white">
            <span>Question {quizState.currentQuestion + 1} of {totalQuestions}</span>
            <span>Score: {quizState.score}</span>
          </div>

          <div className="w-full bg-gray-700 h-2 rounded-full mb-4">
            <div
              className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full"
              style={{ width: `${((quizState.currentQuestion + 1)/totalQuestions)*100}%` }}
            ></div>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-white">
            {questions[quizState.currentQuestion].question}
          </h2>

          <div className="space-y-2">
            {questions[quizState.currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="w-full text-left p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition duration-200 text-white"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
