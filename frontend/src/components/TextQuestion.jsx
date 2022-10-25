import '../styles/TextQuestionStyle.css'

function TextQuestion (props) {
  return (
    <div className='questiontxt'>
      {props.question}
    </div>
  )
}

export default TextQuestion
