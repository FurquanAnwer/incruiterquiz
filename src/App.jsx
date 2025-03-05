import './App.css'
import Login from './Login'
import QuizCreation from './QuizCreation'
import PracticePage from './PracticePage'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Analysis from './Analysis'
import EditQuestion from './EditQuestion'
import { useState } from 'react'
import Error from './Error'
import {Toaster} from "react-hot-toast"

function App() {
  const [isAuthenticated,setIsauthenticated] = useState(false)
  
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path='/login' element={<Login setIsauthenticated={setIsauthenticated}/>}/>            
            <Route path='/quizcreation' element={isAuthenticated ? <QuizCreation/> : <Error/>}/>
            <Route path='/practice' element={isAuthenticated ? <PracticePage/> : <Error/>}/>
            <Route path='/analysis' element={isAuthenticated ? <Analysis/> : <Error/>}/>
            <Route path='/edit-question/:index' element={isAuthenticated && <EditQuestion />} />
            <Route path="*" element={<Navigate to="/login"/>}/>            
          </Routes>
        </Router>
    </Provider>

    </>
    
  )
}

export default App
