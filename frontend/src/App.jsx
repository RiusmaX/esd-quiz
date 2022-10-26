import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nuagedemots from './pages/Nuagedemots'
import Quiz from './pages/Quiz'
import Projection from './pages/Projection'
import Result from './pages/Result'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/projection' element={<Projection />} />
        <Route path='/Result' index element={<Result />} />
        <Route path='/nuagedemots' element={<Nuagedemots />} />
      </Routes>
    </div>
  )
}

export default App
