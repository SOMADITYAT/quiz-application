import React from "react";
import { useNavigate } from "react-router-dom";

const QuizList = () => {
  const navigate = useNavigate();

  const quizzes = [
    {
      id: 1,
      title: "JavaScript Basics",
      description: "Test your JS knowledge!",
      time: 3,
    },
    {
      id: 2,
      title: "React Basics",
      description: "React fundamentals quiz.",
      time: 5,
    },
    {
      id: 3,
      title: "HTML Essentials",
      description: "Are you familiar with HTML tags and structure?",
      time: 4,
    },
    {
      id: 4,
      title: "CSS Styling",
      description: "Evaluate your CSS skills and styling knowledge.",
      time: 5,
    },
    {
      id: 5,
      title: "Node.js Introduction",
      description: "Learn the basics of server-side JavaScript.",
      time: 6,
    },
    {
      id: 6,
      title: "Git and GitHub",
      description: "Test your knowledge of version control.",
      time: 5,
    },
  ];

  const handleTakeQuiz = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Welcome Section */}
      <div className="bg-white text-gray-800 p-8 rounded-lg mb-8 flex items-start shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="text-left w-1/2">
          <h1 className="text-4xl font-bold mb-4 transition-colors duration-300 ease-in-out hover:text-[#0d5c63]">
            Welcome to <span className="text-[#0d5c63]">QuizLand</span>! 🎉
          </h1>
          <p className="text-xl font-semibold mb-2 transition-transform duration-300 ease-in-out hover:translate-x-1">
            Your Adventure Awaits! 🚀
          </p>
          <p className="text-base mb-4 transition-opacity duration-300 ease-in-out hover:opacity-80">
            Dive into our collection of quizzes designed to challenge your
            knowledge and keep you entertained! Whether you're looking to test
            your trivia skills or learn something new, we have a quiz for
            everyone. 🌟
          </p>
          <p className="text-base transition-opacity duration-300 ease-in-out hover:opacity-80">
            Join our community of quiz lovers and discover how fun learning can
            be! Let's get started! 💡🤓
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <img
            src="https://i.ibb.co/CtHTTX5/image-removebg-preview.png" // Replace with a relevant image URL
            alt="Quizzes Illustration"
            className="w-3/4 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>

      {/* Quizzes header */}
      <h1 className="text-3xl font-bold mb-6 text-left text-gray-800">
        Explore Our Exciting Quizzes! 🎓
      </h1>

      {/* Quiz List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        {quizzes.map((quiz) => (
          <li
            key={quiz.id}
            className="border border-gray-300 bg-white rounded-md transition-shadow hover:shadow-lg p-5 flex flex-col"
          >
            <div className="flex justify-between items-start">
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {quiz.title}
                </h2>
                <p className="mt-1 text-gray-600">{quiz.description}</p>
              </div>
              <div className="flex flex-col items-end">
                <button
                  className="bg-[#0d5c63] text-white px-4 py-2 rounded-lg hover:bg-[#0b4a4e] transition-colors focus:outline-none focus:ring focus:ring-[#0d5c63]"
                  onClick={() => handleTakeQuiz(quiz.id)}
                >
                  Take Quiz
                </button>
                <p className="text-sm text-gray-500 mt-1">
                  {quiz.time} minutes quiz ⏳
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* How It Works Section */}
      <div className="bg-white text-gray-800 p-6 rounded-lg mb-8">
        <h2 className="text-3xl font-bold mb-6 text-left">
          How QuizLand Works ✨
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">📝</div>
            <h3 className="text-xl font-semibold mb-1">1️⃣ Choose a Quiz</h3>
            <p className="text-base text-center">
              Browse our quiz collection and select one that interests you!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🚀</div>
            <h3 className="text-xl font-semibold mb-1">2️⃣ Take the Quiz</h3>
            <p className="text-base text-center">
              Click the "Take Quiz" button and start answering questions!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🏆</div>
            <h3 className="text-xl font-semibold mb-1">3️⃣ See Your Score</h3>
            <p className="text-base text-center">
              Submit your answers to get your score and see how you did!
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#f2f2f2] text-gray-800 text-center p-4 w-full flex justify-between">
        <p className="text-sm">© 2024 QuizLand. All Rights Reserved.</p>
        <p className="text-sm">Made with ❤️ in India</p>
      </footer>
    </div>
  );
};

export default QuizList;
