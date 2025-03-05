import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

function AnalysisPage() {
  const navigate = useNavigate()
  const questions = useSelector((state) => state.quiz.questions)
  const userAnswers = useSelector((state) => state.practice.userAnswers)

  let totalMarks = 0
  let correctCount = 0
  let wrongCount = 0
  const results = []
  let unattemptedCount = 0
  


  questions.forEach((question, index) => {
    // console.log({questions})
    const isCorrect = userAnswers[+index] == question.correctOption
    console.log({correct: question.correctAnswer, userAnswer: userAnswers[index]})
    if (userAnswers[index] === undefined) {
      unattemptedCount++
    } else if (isCorrect) {
      totalMarks += question.marks
      correctCount++
    } else {
      wrongCount++
    }

    results.push({
      question: question.question,
      userAnswer: userAnswers[index] !== undefined ? question.options[userAnswers[index]] : "Not Answered",
      correctAnswer: question.options[question.correctOption],
      isCorrect,
    })
  })

  return (
    <div className="bg-radial from-blue-300 to-blue-50 min-h-screen flex flex-col items-center p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center text-blue-800">Quiz Analysis</h1>

      <div className="bg-white p-4 md:p-6 rounded-xl shadow-md w-full md:w-4/5 lg:w-3/4 text-center">
        <h2 className="text-lg md:text-xl text-blue-400 font-semibold">Your Score: {totalMarks} Marks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3">
          <p className="text-green-600 font-semibold p-2 bg-green-50 rounded">✔ Correct: {correctCount}</p>
          <p className="text-red-600 font-semibold p-2 bg-red-50 rounded">✘ Incorrect: {wrongCount}</p>
          <p className="text-black font-semibold p-2 bg-gray-50 rounded">⁉️ Unattempted: {unattemptedCount}</p>
        </div>
      </div>

      <div className="mt-6 w-full md:w-4/5 lg:w-3/4">
        {results.map((result, index) => (
          <div key={index} className={`p-4 rounded-md mb-3 shadow text-white font-bold ${result.isCorrect ? "bg-blue-800" : "bg-blue-500"}`}>
            <h3 className="text-md md:text-lg font-semibold">
              {index + 1}. {result.question}
            </h3>
            <p className="mt-2">
              Your Answer: <span className="font-bold">{result.userAnswer}</span>
            </p>
            <p>
              Correct Answer: <span className="font-bold">{result.correctAnswer}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/practice")}
          className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          Retry Quiz
        </button>
      </div>
    </div>
  )
}

export default AnalysisPage