import Answer from '../components/Answer'
import NumberQuestion from '../components/NumberQuestion'
import TextQuestion from '../components/TextQuestion'

function Quiz () {
  return (
    <div>
      <NumberQuestion number='Question 1' />
      <TextQuestion question='Dans quelle ville l’ESP-ESD n’est pas présente ? ' />
      <Answer answer='Toulouse' />
      <Answer answer='Bordeaux' />
      <Answer answer='Paris' />
      <Answer answer='Caen' />
    </div>
  )
}

export default Quiz
