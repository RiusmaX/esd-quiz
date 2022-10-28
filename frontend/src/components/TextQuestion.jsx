import '../styles/TextQuestionStyle.css'
import Loader from './Loader'

function TextQuestion (props) {
  if (!props.question) {
    return <Loader />
  }
  let fontSize = 0
  if (props.question.length > 35 && props.question.length < 50) {
    fontSize = 26
  } else if (props.question.length > 50 && props.question.length < 60) {
    fontSize = 24
  } else if (props.question.length > 60 && props.question.length < 80) {
    fontSize = 22
  } else {
    fontSize = 26
  }
  return (
    <div style={{ fontSize }} className='questiontxt'>
      {props.question}
    </div>
  )
}

export default TextQuestion
