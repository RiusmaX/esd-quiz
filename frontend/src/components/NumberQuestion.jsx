import '../styles/NumberQuestionStyle.css'

function NumberQuestion (props) {
  return (
    <div className='numberq'>
      Question n°{props.number}
    </div>
  )
}

export default NumberQuestion
