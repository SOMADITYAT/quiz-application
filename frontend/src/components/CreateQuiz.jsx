import React, { useState } from "react";
import axios from "axios";

const CreateQuiz = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [questions, setQuestions] = useState([
    { text: "", options: ["", "", "", ""], correctAnswer: "" },
  ]);

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { text: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const quizData = { title, description, questions };

    try {
      const response = await axios.post("/quizzes", quizData);
      console.log("Quiz created:", response.data);
    } catch (error) {
      console.error("Error creating quiz:", error);
    }

    try {
      // Make sure to point to the backend port
      const response = await axios.post(
        "http://localhost:5000/api/quizzes",
        quizData
      );
      console.log("Quiz created:", response.data);
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Quiz Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {questions.map((question, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Question Text"
            value={question.text}
            onChange={(e) =>
              handleQuestionChange(index, "text", e.target.value)
            }
            required
          />
          {question.options.map((option, optionIndex) => (
            <input
              key={optionIndex}
              type="text"
              placeholder={`Option ${optionIndex + 1}`}
              value={option}
              onChange={(e) =>
                handleOptionChange(index, optionIndex, e.target.value)
              }
              required
            />
          ))}
          <input
            type="text"
            placeholder="Correct Answer"
            value={question.correctAnswer}
            onChange={(e) =>
              handleQuestionChange(index, "correctAnswer", e.target.value)
            }
            required
          />
        </div>
      ))}
      <button type="button" onClick={addQuestion}>
        Add Question
      </button>
      <button type="submit">Create Quiz</button>
    </form>
  );
};

export default CreateQuiz;
