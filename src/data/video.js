export const videos = [
  {
    id: 0,
    title: "Auroras Explained",
    description: "Learn what causes the Northern and Southern Lights.",
    thumbnail: "https://images.unsplash.com/photo-1517816428104-1c9b1d6a0a3e?auto=format&fit=crop&w=800&q=80",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    unlocked: true,
    score: 0,
  },
  {
    id: 1,
    title: "Mars - The Red Planet",
    description: "Discover interesting facts about Mars.",
    thumbnail: "https://images.unsplash.com/photo-1605808591010-8688db327e2f?auto=format&fit=crop&w=800&q=80",
    url: "https://www.w3schools.com/html/movie.mp4",
    unlocked: false,
    score: 0,
  },
  {
    id: 2,
    title: "Earth Atmosphere",
    description: "Explore the main gases of Earth's atmosphere.",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    unlocked: false,
    score: 0,
  },
  {
    id: 3,
    title: "Ozone Layer Protection",
    description: "Learn how the ozone layer protects life on Earth.",
    thumbnail: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=80",
    url: "https://www.w3schools.com/html/movie.mp4",
    unlocked: false,
    score: 0,
  },
];

export const quizzes = {
  1: [
    { q: "2 + 2 = ?", options: ["3","4","5"], correct: 1 },
    { q: "Capital of France?", options: ["Paris","Berlin","Rome"], correct: 0 },
    { q: "Color of sky?", options: ["Blue","Green","Red"], correct: 0 },
    { q: "5 * 5 = ?", options: ["20","25","30"], correct: 1 },
  ],
  2: [
    { q: "1 + 1 = ?", options: ["1","2","3"], correct: 1 },
    { q: "Sun rises from?", options: ["West","East","North"], correct: 1 },
    { q: "H2O is?", options: ["Water","Oxygen","Hydrogen"], correct: 0 },
    { q: "10 / 2 = ?", options: ["4","5","6"], correct: 1 },
  ],
  // Add quizzes for videos 3 & 4 similarly
};
