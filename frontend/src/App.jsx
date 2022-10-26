import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Projection from './pages/Projection'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/projection' element={<Projection />} />
      </Routes>
    </div>
  )
}

export default App
