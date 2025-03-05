import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { submitAnswers } from "./practiceSlice";

function PracticePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.quiz.questions);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(
    questions.map((q) => (q.time ? q.time * 60 : 60))
  );
  const [showSidebar, setShowSidebar] = useState(false);
  const [totalMarks, setTotalMarks] = useState(0);

  useEffect(() => {
    if (timeLeft[currentIndex] === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTimes) =>
        prevTimes.map((time, index) =>
          index === currentIndex ? Math.max(time - 1, 0) : time
        )
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [currentIndex, timeLeft[currentIndex]]);

  const handleSelectAnswer = (optionIndex) => {
    if (timeLeft[currentIndex] > 0) {
      setSelectedAnswers({ ...selectedAnswers, [currentIndex]: optionIndex });

      if (questions[currentIndex].correctIndex === optionIndex) {
        setTotalMarks((prevMarks) => prevMarks + questions[currentIndex].marks);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSubmit = () => {
    dispatch(submitAnswers(selectedAnswers));
    navigate("/analysis");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="bg-blue-200 min-h-screen flex flex-col md:grid md:grid-cols-12">
      <button
        className="md:hidden bg-blue-400 text-white p-2 m-2 rounded-md fixed top-0 left-0 z-10 shadow-md"
        onClick={toggleSidebar}
      >
        {showSidebar ? "✕ Close" : "☰ Questions"}
      </button>

      <div
        className={`${
          showSidebar ? "block" : "hidden"
        } md:block md:col-span-3 lg:col-span-2 bg-blue-400 text-white p-4 h-screen md:h-auto overflow-y-auto fixed md:static w-full md:w-auto z-5 shadow-md`}
      >
        <h2 className="text-lg font-bold mb-4 text-white">Questions List</h2>
        <div className="flex flex-col space-y-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setShowSidebar(false);
              }}
              className={`p-2 rounded-md shadow-sm ${
                currentIndex === index
                  ? "bg-white text-blue-400 font-semibold"
                  : "bg-blue-200 text-blue-400 hover:bg-white transition-colors"
              }`}
            >
              Question {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 md:col-span-9 lg:col-span-10 bg-white p-4 md:p-6 mt-12 md:mt-0 shadow-md">
        {questions.length > 0 && (
          <>
            <div className="flex justify-between items-center text-lg font-bold text-blue-900">
              <div>
                Time Left: {Math.floor(timeLeft[currentIndex] / 60)}:
                {(timeLeft[currentIndex] % 60).toString().padStart(2, "0")}
              </div>
              </div>

            <h2 className="text-2xl font-semibold mb-4 text-blue-900">
              {questions[currentIndex].question}
            </h2>

            <div className="flex flex-col space-y-2">
              {questions[currentIndex].options.map((option, index) => (
                <button
                  key={index}
                  className={`p-3 border border-blue-200 rounded-md shadow-sm transition-all ${
                    selectedAnswers[currentIndex] === index
                      ? "bg-green-500 text-white font-extrabold border-2 border-green-800 shadow-lg"
                      : "bg-blue-400 text-white font-bold hover:bg-blue-800 hover:text-white"
                  } ${timeLeft[currentIndex] === 0 ? "cursor-not-allowed opacity-50" : ""}`}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={timeLeft[currentIndex] === 0}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap justify-between gap-2">
              <button
                onClick={handleNextQuestion}
                className={`bg-blue-400 text-white font-bold px-4 py-2 rounded-md hover:bg-blue-800 hover:text-white transition-colors shadow-sm ${
                  currentIndex === questions.length - 1 || timeLeft[currentIndex] === 0
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={currentIndex === questions.length - 1 || timeLeft[currentIndex] === 0}
              >
                Next
              </button>
              {currentIndex === questions.length - 1 && (
                <button
                  onClick={handleSubmit}
                  className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-200 hover:text-blue-400 transition-colors shadow-sm"
                >
                  Submit Quiz
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PracticePage;
