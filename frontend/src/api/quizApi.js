import axios from "axios";

const API_URL = "http://localhost:8080/api/quizzes";

export const getQuizzes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getQuizById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const submitQuiz = async (quizData) => {
  const response = await axios.post(`${API_URL}/submit`, quizData);
  return response.data;
};

export const createQuiz = async (quizData) => {
  const response = await axios.post(API_URL, quizData);
  return response.data;
};



// not connected frontend 