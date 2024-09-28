import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizList from "./components/QuizList";
import QuizPage from "./components/QuizPage";
import ScoreSummary from "./components/ScoreSummary";
import CreateQuiz from "./components/CreateQuiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/score" element={<ScoreSummary />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
