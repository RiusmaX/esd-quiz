import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Quiz from './pages/Quiz'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/quiz' index element={<Quiz />} />
      </Routes>
    </div>
  )
}

export default App
