export type Test = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: number;
  premium: boolean;
  description: string;
};

export const readingTests: Test[] = [
  { id: "r1", title: "The History of Coffee", level: "Intermediate", duration: 20, premium: false, description: "A passage about coffee's journey from Ethiopia to the world." },
  { id: "r2", title: "Climate Change & Oceans", level: "Advanced", duration: 25, premium: false, description: "Scientific text on ocean acidification and warming." },
  { id: "r3", title: "Urban Wildlife", level: "Beginner", duration: 15, premium: false, description: "How animals adapt to city environments." },
  { id: "r4", title: "The Future of AI", level: "Advanced", duration: 25, premium: true, description: "Examining artificial intelligence and society." },
  { id: "r5", title: "Renewable Energy", level: "Intermediate", duration: 20, premium: true, description: "Solar, wind, and the global transition." },
  { id: "r6", title: "Ancient Civilizations", level: "Intermediate", duration: 22, premium: true, description: "From Mesopotamia to the Indus Valley." },
];

export const listeningTests: Test[] = [
  { id: "l1", title: "University Lecture: Marketing", level: "Intermediate", duration: 30, premium: false, description: "A lecture on consumer behavior." },
  { id: "l2", title: "Conversation: Booking a Hotel", level: "Beginner", duration: 15, premium: false, description: "Everyday English at a hotel reception." },
  { id: "l3", title: "Documentary: Antarctic Research", level: "Advanced", duration: 25, premium: false, description: "Scientists describe expedition life." },
  { id: "l4", title: "Job Interview Simulation", level: "Intermediate", duration: 20, premium: true, description: "Realistic interview questions and answers." },
  { id: "l5", title: "TED-style Talk: Habits", level: "Advanced", duration: 18, premium: true, description: "How small habits create big change." },
];

export type Question = {
  id: string;
  question: string;
  options: string[];
  answer: number;
};

export const sampleQuestions: Record<string, { passage?: string; audioUrl?: string; questions: Question[] }> = {
  r1: {
    passage: `Coffee is one of the most consumed beverages in the world. Its origins trace back to the ancient coffee forests on the Ethiopian plateau. According to legend, a goat herder named Kaldi first discovered the potential of these beloved beans after noticing that his goats became so energetic after eating berries from a certain tree that they did not want to sleep at night.

From Ethiopia, coffee spread to the Arabian Peninsula. By the 15th century, coffee was being grown in the Yemeni district of Arabia, and by the 16th century it was known in Persia, Egypt, Syria, and Turkey. Coffee was not only enjoyed in homes but also in public coffee houses, which began to appear in cities across the Near East.`,
    questions: [
      { id: "q1", question: "Where did coffee originate?", options: ["Yemen", "Ethiopia", "Turkey", "Brazil"], answer: 1 },
      { id: "q2", question: "Who is said to have discovered coffee's effect?", options: ["A merchant", "A monk", "A goat herder", "A king"], answer: 2 },
      { id: "q3", question: "By which century was coffee known in Persia and Egypt?", options: ["14th", "15th", "16th", "17th"], answer: 2 },
    ],
  },
  l1: {
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a73467.mp3",
    questions: [
      { id: "q1", question: "What is the main topic of the lecture?", options: ["Pricing strategy", "Consumer behavior", "Brand identity", "Market research"], answer: 1 },
      { id: "q2", question: "Which factor is described as most influential?", options: ["Cultural", "Personal", "Psychological", "Social"], answer: 2 },
    ],
  },
};

export const leaderboard = [
  { rank: 1, name: "Aziza K.", score: 9850, country: "UZ" },
  { rank: 2, name: "Bekzod M.", score: 9420, country: "UZ" },
  { rank: 3, name: "Diyora S.", score: 9100, country: "UZ" },
  { rank: 4, name: "Eldor T.", score: 8770, country: "UZ" },
  { rank: 5, name: "Feruza R.", score: 8540, country: "UZ" },
  { rank: 6, name: "Gulnoza P.", score: 8210, country: "UZ" },
  { rank: 7, name: "Husan B.", score: 7980, country: "UZ" },
  { rank: 8, name: "Iroda N.", score: 7650, country: "UZ" },
];

export const testimonials = [
  { name: "Madina A.", score: "Band 8.0", quote: "The reading passages mirror the real exam. I went from 6.5 to 8.0 in two months." },
  { name: "Sardor K.", score: "Band 7.5", quote: "Listening practice with instant feedback was a game-changer for my score." },
  { name: "Nilufar T.", score: "Band 8.5", quote: "Clean interface, focused practice. Exactly what I needed before the test." },
];
