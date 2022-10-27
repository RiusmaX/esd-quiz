import '../styles/ProjectionStyle.css'
import { useEffect, useState } from 'react'
import Leftside from '../components/Leftside'
import Lienconnexion from '../components/Lienconnexion'
import Nbrparticipant from '../components/Nbrparticipant'
import NumberQuestion from '../components/NumberQuestion'
import TextQuestion from '../components/TextQuestion'
import Podium from '../components/Podium'
import Header from '../components/Header'
import Button from '../components/Button'
import ProgressBar from '../components/ProgressBar'
import { useEffect, useState } from 'react'
import { getQuestions } from '../services/Api'
import { getPlayers } from '../services/Api'

function Projection () {
  const [questions, setQuestions] = useState([])
   const [players, setPlayers] = useState(0)

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const getData = async () => {
      const _questions = await getQuestions()
       const _players = await getPlayers()
      if (_questions && _questions.data) {
        setQuestions(_questions.data)
       }
    
      if (_players && _players.data) {
        setPlayers(_players.meta.pagination.total)
      }
    }
    getData()
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

  return (
    <div className='container'>
      <div className='row'>
        <div className='col leftside'>
          <div className='question-project'>
            <ProgressBar length={questions.length} progress={index + 1} />
          <Leftside />
          <Lienconnexion />
          <Nbrparticipant players={players} />
        </div>

            <NumberQuestion number={index + 1} />
            <TextQuestion question={questions[index].attributes.content} />

            <Button onClick={handlePrevious} text='<' />
            <Button onClick={handleNext} text='>' />
          </div>
          <h4 className='classement'>Classement</h4>
          <div className='border'> </div>
          <Podium />
        </div>

        <div className='col centerside'> </div>

        <div className='col rightside'>
          <Leftside />
          <Lienconnexion />
          <Nbrparticipant />
        </div>

      </div>

    </div>
  )
}

export default Projection
/*  */
