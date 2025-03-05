import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

function Sidebar() {
  const navigate = useNavigate()
  const questions = useSelector((state) => state.quiz.questions)

  const handleQuestionClick = (index) => {
    navigate(`/edit-question/${index}`)
  }

  return (
    <div className="flex flex-col justify-between p-4 bg-gradient-to-r from-blue-300 to-blue-200 h-full w-full">
      
      <div className="flex flex-col space-y-2 max-h-[60vh] overflow-y-auto">
        {questions.map((_, index) => (
          <button
            key={index}
            onClick={() => handleQuestionClick(index)}
            className="bg-white text-blue-900 font-bold px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition-colors"
          >
            Question {index + 1}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <button
          onClick={() => navigate("/practice")}
          className="bg-white text-blue-900 font-bold px-4 py-2 rounded-md w-full hover:bg-blue-100 transition-colors"
        >
          Finish
        </button>
      </div>
    </div>
  )
}

export default Sidebar

