import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScoreSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md mt-[4rem] text-center flex-grow">
        <div className="text-[#0d5c63] text-5xl mb-2">🏆</div>
        <h1 className="text-3xl font-bold mb-4 text-[#0d5c63]">
          🎉 Quiz Completed! 🎉
        </h1>
        <p className="text-xl mb-2">
          You scored{" "}
          <span className="font-semibold text-[#0d5c63]">{score}</span> out of{" "}
          <span className="font-semibold text-[#0d5c63]">{totalQuestions}</span>
          .
        </p>
        <p className="text-lg text-gray-600 mb-4">
          Thank you for participating! Your knowledge is impressive! 🌟
        </p>
        <button
          className="bg-[#0d5c63] text-white px-6 py-2 rounded-lg hover:bg-[#0d5c63]/80 transition duration-300"
          onClick={() => navigate("/")}
        >
          Go to Quiz List
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#f2f2f2] p-4 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} QuizLand | Made with ❤️ in India
        </p>
      </footer>
    </div>
  );
};

export default ScoreSummary;
