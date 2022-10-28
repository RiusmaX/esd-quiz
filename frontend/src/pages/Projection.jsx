import '../styles/ProjectionStyle.css'
import { useEffect, useState } from 'react'
import Leftside from '../components/Leftside'
import Lienconnexion from '../components/Lienconnexion'
import Nbrparticipant from '../components/Nbrparticipant'
import NumberQuestion from '../components/NumberQuestion'
import TextQuestion from '../components/TextQuestion'
import Podium from '../components/Podium'
import Button from '../components/Button'
import ProgressBar from '../components/ProgressBar'
import { getQuestions, getPlayers, getClassement } from '../services/Api'

function Projection () {
  const [questions, setQuestions] = useState([])
  const [classement, setClassement] = useState([])
  const [players, setPlayers] = useState(0)

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const _getClassement = async () => {
      const result = await getClassement()
      setClassement(result.data)
    }
    _getClassement()
    const _getQuestions = async () => {
      const _questions = await getQuestions()
      if (_questions && _questions.data) {
        setQuestions(_questions.data)
      }
    }
    const _getPlayers = async () => {
      const _players = await getPlayers()
      if (_players && _players.data) {
        setPlayers(_players.meta.pagination.total)
      }
    }
    _getQuestions()
    const interval = setInterval(() => {
      _getPlayers()
      _getClassement()
    }, 1000)

    return function cleanup () {
      clearInterval(interval)
    }
  }, [])

  const handleNext = () => {
    if (index < questions.length - 1) {
      setIndex(index + 1)
    }
  }

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  if (!questions && questions.length > 0) {
    return (
      <h1>Chargement...</h1>
    )
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col leftside'>
          <div className='question-project'>
            <Leftside />
            <Lienconnexion lien='https://esd-quiz.sergent.tech/' />
            <Nbrparticipant players={players} />
          </div>

        </div>

        <div className='col centerside'> </div>

        <div className='col rightside'>

          <ProgressBar length={questions.length} progress={index + 1} />
          <NumberQuestion number={index + 1} />

          <TextQuestion question={questions[index]?.attributes?.content} />
          <div className='row'>
            <Button onClick={handlePrevious} text='<' />
            <Button onClick={handleNext} text='>' />
          </div>
          <h4 className='classement'>Classement</h4>
          <div className='border'> </div>
          <Podium classement={classement} />

        </div>
      </div>

    </div>
  )
}

export default Projection
/*  */
