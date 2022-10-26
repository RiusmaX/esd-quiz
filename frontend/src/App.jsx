import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Result from './pages/Result'

function App () {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/quiz' index element={<Quiz />} />
        <Route path='/Result' index element={<Result />} />
      </Routes>
    </div>
  )
}

export default App
