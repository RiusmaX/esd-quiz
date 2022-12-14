import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nuagedemots from './pages/Nuagedemots'
import Quiz from './pages/Quiz'
import Projection from './pages/Projection'
import Result from './pages/Result'
import Header from './components/Header'
import Insertmot from './pages/Insertmot'

function App () {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/projection' element={<Projection />} />
        <Route path='/resultat' element={<Result />} />
        <Route path='/mot' element={<Insertmot />} />
        <Route path='/nuagedemots' element={<Nuagedemots />} />
      </Routes>
    </div>
  )
}

export default App
