import { useNavigate, useParams } from "react-router"
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { updateQuestion, deleteQuestion } from "./quizSlice"
import { useEffect } from "react"

function EditQuestion() {
  const { index } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const questions = useSelector((state) => state.quiz.questions)
  const questionData = questions[index]

  const { register, handleSubmit, reset, setValue, watch } = useForm()

  useEffect(() => {
    if (questionData) {
      reset(questionData) 
    }
  }, [questionData, reset])

  const onSubmit = (data) => {
    dispatch(updateQuestion({ index: Number(index), newQuestion: data }))
    navigate("/quizcreation")
  }

  const handleDelete = () => {
    dispatch(deleteQuestion(Number(index)))
    navigate("/quizcreation")
  }

  if (!questionData) return <p>Loading...</p>

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <form
  onSubmit={handleSubmit(onSubmit)}
  className="bg-blue-50 p-4 sm:p-5 w-full max-w-3xl shadow-2xl flex flex-col justify-center items-center space-y-4"
>
  <div className="w-full sm:w-5/6">
    <label htmlFor="question" className="text-gray-700 font-medium block mb-1">
      Question:
    </label>
    <textarea
      id="question"
      {...register("question", { required: "Question is required" })}
      className="mb-5 border border-gray-400 text-gray-900 w-full p-3 bg-gray-100 rounded"
      placeholder="Type your question..."
    />
  </div>

  <div className="flex flex-col items-start w-full sm:w-5/6 space-y-2">
    <label className="text-gray-700 font-medium block">Options:</label>
    {watch("options")?.map((option, i) => (
      <div key={i} className="flex items-center space-x-2 w-full">
        <input
          {...register(`options.${i}`, { required: "Option is required" })}
          placeholder={`Option ${i + 1}`}
          className="border border-gray-400 p-2 w-full rounded"
        />
        <div className="flex items-center whitespace-nowrap">
          <input
            type="radio"
            {...register("correctOption")}
            value={i}
            className="w-4 h-4"
            id={`edit-option-${i}`}
          />
          <label htmlFor={`edit-option-${i}`} className="ml-1 text-sm sm:text-base">
            Correct
          </label>
        </div>
      </div>
    ))}
  </div>

  
  <div className="flex flex-col space-y-2 w-full sm:w-5/6">
    <div>
      <label htmlFor="marks" className="text-gray-700 font-medium block mb-1">
        Marks:
      </label>
      <input
        id="marks"
        {...register("marks", { required: "Marks are required" })}
        placeholder="Marks for this question"
        className="border border-gray-400 p-2 w-full rounded"
        type="number"
      />
    </div>

    <div>
      <label htmlFor="time" className="text-gray-700 font-medium block mb-1">
        Time (minutes):
      </label>
      <input
        id="time"
        {...register("time", { required: "Time is required" })}
        placeholder="Time in mins"
        className="border border-gray-400 p-2 w-full rounded"
        type="number"
      />
    </div>
  </div>

  
  <div className="flex space-x-4">
    <button
      type="submit"
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
    >
      Save Changes
    </button>

    <button
      type="button"
      onClick={handleDelete}
      className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
    >
      Delete Question
    </button>

    <button
      type="button"
      onClick={() => window.history.back()} 
      className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
    >
      Go Back
    </button>
  </div>
</form>

    </div>
  )
}

export default EditQuestion
