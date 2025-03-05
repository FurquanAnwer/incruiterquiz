import Sidebar from "./components/Sidebar"
import QuizQuestions from "./components/QuizQuestions"

function QuizCreation() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:grid md:grid-cols-12">
      <div className="w-full md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center">
        <Sidebar />
      </div>
      <div className="w-full md:col-span-9 lg:col-span-10 flex flex-col justify-center items-center py-6 px-4 bg-radial from-blue-100 to-blue-400">
        <QuizQuestions />
      </div>
    </div>
  )
}

export default QuizCreation

