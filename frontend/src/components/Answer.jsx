import '../styles/AnswerStyle.css'

function Answer (props) {
  let fontSize = 0
  if (props.answer.content.length > 20 && props.answer.content.length < 45) {
    fontSize = 20
  } else if (props.answer.content.length > 50 && props.answer.content.length < 60) {
    fontSize = 24
  } else if (props.answer.content.length > 60 && props.answer.content.length < 80) {
    fontSize = 22
  } else {
    fontSize = 26
  }
  return (
    <div style={{ fontSize }} onClick={() => props.onClick(props.answer)} className={`answer ${props.selected ? 'selected' : ''}`}>
      {props.answer.content}
    </div>
  )
}

export default Answer
