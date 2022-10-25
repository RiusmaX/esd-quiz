import '../styles/NumberQuestionStyle.css'

function NumberQuestion (props) {
  return (
    <div className='question'>
      <div className='numberq'>
        {props.number}
      </div>
    </div>
  )
}

export default NumberQuestion
