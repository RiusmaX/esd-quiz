import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Answer from '../components/Answer'
import Button from '../components/Button'
import NumberQuestion from '../components/NumberQuestion'
import ProgressBar from '../components/ProgressBar'
import TextQuestion from '../components/TextQuestion'
import { getQuestions, setResult } from '../services/Api'
import Loader from '../components/Loader'

import '../styles/QuizStyle.css'

function Quiz () {
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState()
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [total, setTotal] = useState(0)
  const navigate = useNavigate()

  if (!JSON.parse(window.localStorage.getItem('PLAYER'))) {
    navigate('/')
  }

  useEffect(() => {
    const getData = async () => {
      const data = await getQuestions()
      if (data && data.data) {
        setQuestions(data.data)
      }
    }
    getData()
  }, [])

  const handleNext = async () => {
    if (selectedAnswer) {
      const nbPoints = selectedAnswer.isRight ? questions[index].attributes.value : 0
      const _answeredQuestions = answeredQuestions.concat([{
        question: questions[index].id,
        isAnswerCorrect: selectedAnswer.isRight,
        points: nbPoints,
        answer: selectedAnswer.content,
        correctAnswer: questions[index].attributes.answers.find(a => a.isRight).content
      }])
      const _total = total + nbPoints
      setAnsweredQuestions(_answeredQuestions)
      setTotal(_total)
      if (index < questions.length - 1) {
        await setResult(_answeredQuestions, _total)
        setSelectedAnswer(null)
        setIndex(index + 1)
      }
    }
    if (index >= questions.length - 1) {
      navigate('/mot')
    }
  }

  // const handlePrevious = () => {
  //   if (index > 0) {
  //     setIndex(index - 1)
  //   }
  // }

  const handleSelectAnswer = (answer) => {
    setSelectedAnswer(answer)
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
                        return (
                          <Answer
                            key={answer.id}
                            onClick={handleSelectAnswer}
                            answer={answer}
                            selected={!!(selectedAnswer && selectedAnswer.id === answer.id)}
                          />
                        )
                      })
                    )
                  : null
              }
              {/* <Button onClick={handlePrevious} text='<' /> */}
              <Button disabled={!selectedAnswer} onClick={handleNext} text='Valider' />
            </div>
            )
          : <Loader />
        }
    </>
  )
}

export default Quiz
