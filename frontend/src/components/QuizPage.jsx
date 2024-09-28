import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const QuizPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(12);
  const [selectedOption, setSelectedOption] = useState(null); 
  const [isAnswerSelected, setIsAnswerSelected] = useState(false); 

  useEffect(() => {
    const fetchQuizData = () => {
      const quizData = {
        questions: [
          {
            questionText: "What is a variable in JavaScript?",
            options: [
              "A container for storing data values",
              "A type of function",
              "A loop structure",
              "None of the above",
            ],
            correctOption: "A container for storing data values",
          },
          {
            questionText:
              "Which of the following is a primitive data type in JavaScript?",
            options: ["Array", "Object", "String", "Function"],
            correctOption: "String",
          },
          {
            questionText:
              "What keyword is used to declare a constant variable in JavaScript?",
            options: ["let", "var", "const", "define"],
            correctOption: "const",
          },
          {
            questionText: "How do you create a function in JavaScript?",
            options: [
              "function myFunction() {}",
              "create myFunction() {}",
              "define myFunction() {}",
              "function:myFunction() {}",
            ],
            correctOption: "function myFunction() {}",
          },
          {
            questionText: "What is the output of '2' + 2 in JavaScript?",
            options: ["4", "'22'", "undefined", "Error"],
            correctOption: "'22'",
          },
          {
            questionText:
              "Which operator is used to assign a value to a variable?",
            options: ["=", ":", "==", "==="],
            correctOption: "=",
          },
        ],
      };

      setQuizData(quizData.questions);
    };

    fetchQuizData();
  }, [quizId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    if (timeRemaining === 0) {
      handleNextQuestion();
    }

    return () => clearInterval(timer);
  }, [timeRemaining]);

  const handleAnswer = (selected) => {
    if (isAnswerSelected) return; 

    setSelectedOption(selected); 
    setIsAnswerSelected(true); 
    if (selected === quizData[currentQuestion].correctOption) {
      setScore(score + 1);
    }

    const audio = new Audio("/path/to/sound.mp3");
    audio.play();

    setTimeout(() => {
      handleNextQuestion();
    }, 2000); 
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    setTimeRemaining(12);
    setSelectedOption(null); 
    setIsAnswerSelected(false); 
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate("/score", { state: { score, totalQuestions: quizData.length } });
    }
  };

  return (
    <div className="flex flex-col min-h-screen container mx-auto p-6 bg-gray-100 rounded-lg mt-4 shadow-md">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-[#0d5c63] mb-2">
          📋 Instructions
        </h2>
        <p className="text-gray-700">
          Select the best answer for each question. Good luck! 🍀
        </p>
      </div>

      <div className="flex-grow">
        {quizData.length > 0 && (
          <>
            <div className="mb-4 text-center">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-gray-700">
                  Question {currentQuestion + 1} of {quizData.length}
                </span>
                <span className="text-lg font-medium text-red-500">
                  ⏳ Time Left: {timeRemaining} seconds
                </span>
              </div>
              <div className="relative w-full h-2 bg-gray-300 rounded mt-2">
                <div
                  className="absolute h-full bg-[#0d5c63] rounded"
                  style={{
                    width: `${
                      ((currentQuestion + 1) / quizData.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
              {quizData[currentQuestion].questionText}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quizData[currentQuestion].options.map((option, index) => {
                const isCorrect =
                  option === quizData[currentQuestion].correctOption;
                const isSelected = selectedOption === option;
                const isAnswerCorrect = isAnswerSelected && isCorrect; 
                const isAnswerIncorrect =
                  isAnswerSelected && !isCorrect && isSelected; 

                return (
                  <div
                    key={index}
                    className={`p-4 border rounded-md cursor-pointer transition-all duration-300 ease-in-out 
                      ${
                        isAnswerCorrect
                          ? "bg-green-500 border-gray-700"
                          : isAnswerIncorrect
                          ? "bg-red-500 border-gray-700"
                          : isSelected
                          ? "bg-red-200 border-gray-400"
                          : "bg-white border-gray-400"
                      }
                    `}
                    onClick={() => handleAnswer(option)}
                    style={{
                      pointerEvents: isAnswerSelected ? "none" : "auto",
                    }} 
                  >
                    {option}
                  </div>
                );
              })}
            </div>
          </>
        )}
        {quizData.length === 0 && (
          <p className="text-center text-gray-500">No quiz data available.</p>
        )}
      </div>

      <footer className="bg-[#f2f2f2] p-4 mt-6 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} QuizLand | Made with ❤️ in India
        </p>
      </footer>
    </div>
  );
};

export default QuizPage;
