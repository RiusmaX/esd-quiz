import '../styles/AnswerStyle.css'

function Answer (props) {
  return (
    <div onClick={() => props.onClick(props.answer)} className={`answer ${props.selected ? 'selected' : ''}`}>
      {props.answer.content}
    </div>
  )
}

export default Answer
