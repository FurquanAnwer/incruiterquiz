import { useState } from "react"
import { useNavigate } from "react-router"
import toast from "react-hot-toast"

function Login({ setIsauthenticated }) {
  const orgusername = "incruiteradmin"
  const orgpassword = "123456"
  const navigate = useNavigate()
  const [username, setUsername] = useState(orgusername)
  const [password, setPassword] = useState(orgpassword)

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handlesubmit = () => {
    if (username === "" || password === "") {
      toast.error("Username or password can not be left empty!")
    } else if (username === orgusername && password === orgpassword) {
      setIsauthenticated(true)
      toast.success("Login successful!")
      navigate("/quizcreation")
    } else {
      toast.error("You have entered the wrong username or password")  
    }
  }
  return (
    <div className="min-h-screen bg-radial from-blue-400 to-blue-100 flex justify-center items-center p-4">
      <div className="bg-white flex flex-col justify-center items-center space-y-4 p-4 sm:p-8 w-full max-w-md shadow-green-900 shadow-lg h-2/3">
        <h1 className="text-blue-600 text-xl sm:text-2xl md:text-3xl my-2 mx-1 text-center font-bold">
          Incruiter Quiz Creation Platform
        </h1>
        <div className="flex flex-col space-y-3 p-3 sm:p-5 w-full">
          <input className="p-2 border rounded w-full text-blue-500" placeholder={username} onChange={handleUsernameChange} />
          <input
            className="p-2 border rounded w-full text-blue-500"
            type="password"
            placeholder={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="bg-blue-400 text-white w-full sm:w-2/3 md:w-1/2 rounded-3xl p-3 hover:bg-blue-200 hover:text-black transition-colors duration-300"
          onClick={handlesubmit}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login

