import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addQuestion } from "../quizSlice"

function QuizQuestions() {
  const dispatch = useDispatch()
  const { register, handleSubmit, watch, setValue, reset,formState:{errors} } = useForm({
    defaultValues: {
      question: "",
      options: ["", ""],
      correctOption: 0,
      marks: "",
      time: "",
    },
  })

  const onSubmit = (data) => {
    console.log("Submitted Data:", data)
    dispatch(addQuestion(data))
    reset()
  }

  const addOption = () => {
    const currentOptions = watch("options")
    setValue("options", [...currentOptions, ""])
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-blue-600 p-4 sm:p-5 w-full max-w-3xl shadow-2xl flex flex-col justify-center items-center space-y-4"
    >
      <textarea
        {...register("question", { required: "Question is required" })}
        className="mb-5 text-blue-900 font-bold text-2xl w-full sm:w-5/6 p-3 bg-gray-100"
        placeholder="Type your question...."
      />
      {errors.question && <p className="text-red-500 text-sm">{errors.question.message}</p>}

      <div className="flex flex-col items-start w-full sm:w-5/6 space-y-2">
        {watch("options").map((option, index) => (
          <div key={index} className="flex items-center space-x-2 w-full text-blue-800">
            <input
              {...register(`options.${index}`, { required: "Option is required" })}
              placeholder={`Option ${index + 1}`}
              className="border border-gray-400 p-2 w-full rounded"
            />
            {errors.options?.[index] && <p className="text-red-500 text-sm">{errors.options[index].message}</p>}
            <div className="flex items-center whitespace-nowrap">
              <input
                type="radio"
                {...register("correctOption")}
                value={index}
                className="w-4 h-4"
                id={`option-${index}`}
              />
              {errors.radio && <p className="text-red-500 text-sm">{errors.radio.message}</p>}

              <label htmlFor={`option-${index}`} className="ml-1 text-sm sm:text-base text-blue-800">
                Correct
              </label>
            </div>
          </div>
        ))}
      </div>

      <div>
        <button
          type="button"
          onClick={addOption}
          className="bg-blue-600 text-white rounded-lg font-bold border-2 px-4 py-2 hover:bg-blue-700 transition-colors"
        >
          Add more options
        </button>
      </div>

      <div className="flex flex-col space-y-2 w-full sm:w-5/6">
        <label htmlFor="marks" className="text-gray-700 font-medium">
          Marks for this question:
        </label>
        <input
          id="marks"
          {...register("marks", { required: "Marks are required" })}
          placeholder="Enter marks"
          className="text-blue-600 p-2 w-full rounded"
        />
        {errors.marks && <p className="text-red-500 text-sm">{errors.marks.message}</p>}

        <label htmlFor="time" className="text-gray-700 font-medium">
          Time given to solve this question (in mins):
        </label>
        <input
          id="time"
          {...register("time", { required: "Time is required" })}
          placeholder="Enter time in minutes"
          className="text-blue-600 p-2 w-full rounded"
        />
        {errors.time && <p className="text-red-500 text-sm">{errors.time.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white px-6 py-2 font-bold rounded-lg hover:bg-blue-700 transition-colors">
        Submit Question
      </button>
    </form>
  )
}

export default QuizQuestions

