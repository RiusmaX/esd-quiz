import '../styles/ButtonStyle.css'

function Button (props) {
  return (
    <button onClick={props.onClick} className='btn'>
      {props.text}
    </button>
  )
}

export default Button
