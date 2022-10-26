import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nuagedemots from './pages/Nuagedemots'
import Quiz from './pages/Quiz'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/quiz' index element={<Quiz />} />
        <Route path='/nuagedemots' element={<Nuagedemots />} />
      </Routes>
    </div>
  )
}

export default App
