import { useEffect, useState } from 'react'
import Answer from '../components/Answer'
import Button from '../components/Button'
import NumberQuestion from '../components/NumberQuestion'
import ProgressBar from '../components/ProgressBar'
import TextQuestion from '../components/TextQuestion'
import { getQuestions } from '../services/Api'

import '../styles/QuizStyle.css'

function Quiz () {
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const getData = async () => {
      const data = await getQuestions()
      if (data && data.data) {
        setQuestions(data.data)
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
    <>
      <ProgressBar length={questions.length} progress={index + 1} />
      {
        questions && questions[index] && questions[index].attributes
          ? (
            <div className='quizContainer'>
              <NumberQuestion number={index + 1} />
              <TextQuestion question={questions[index].attributes.content} />
              {
                questions[index].attributes.answers
                  ? (
                      questions[index].attributes.answers.map(answer => {
                        return <Answer key={answer.id} answer={answer.content} />
                      })
                    )
                  : null
              }
              <Button onClick={handlePrevious} text='<' />
              <Button onClick={handleNext} text='Valider' />
            </div>
            )
          : <h2>Chargement...</h2>
        }
    </>
  )
}

export default Quiz
