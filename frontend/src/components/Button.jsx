import '../styles/ButtonStyle.css'

function Button (props) {
  return (
    <button onClick={props.onClick} className={`btn ${props.disabled ? 'btn-disabled' : ''}`} disabled={props.disabled}>
      {props.text}
    </button>
  )
}

export default Button
